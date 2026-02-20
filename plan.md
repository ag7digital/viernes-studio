# Plan: Migrate Hardcoded Site Text to Headless WordPress (Like Blog)

## Summary

`documentation.md` correctly reflects current state: most site copy is hardcoded in `src/app/*/page.tsx` and `src/app/components/*`, while blog already consumes WordPress (`NEXT_PUBLIC_CMS_BASE_URL` + `wp-json/wp/v2/posts`).

This plan keeps the existing blog pattern and introduces structured WordPress Pages + ACF for non-blog content, with a phased rollout:

1. Phase 1: `Home + About + Corporate`
2. Phase 2+: remaining service/marketing pages in batches

Content is fetched at build/deploy time (your requested behavior), not runtime.

## Implementation Design

## 1. Content model in WordPress (Pages + ACF)

1. Create one WordPress Page per frontend route with fixed slugs:

- `home`
- `about`
- `corporate-video`

2. Add ACF field groups per page template (show in REST enabled).
3. Use structured fields, not raw HTML blobs, except rich text sections where formatting is required.

### Required ACF groups (Phase 1)

1. `home_page_fields`

- `hero_title_line_1`, `hero_title_line_2`, `hero_subtitle`, `hero_body`, `hero_cta_label`, `hero_cta_href`, `hero_video_id`, `hero_video_thumb`
- `trust_intro`
- `testimonials` (repeater: `name`, `role`, `avatar_url`, `content`)
- `services_title`, `services_subtitle`, `services_body`
- `portfolio_button_label`

2. `about_page_fields`

- `header_title_image`
- `what_we_do_title`, `what_we_do_body`
- `what_we_are_title`, `what_we_are_body_1`, `what_we_are_body_2`
- `value_prop_title`, `value_prop_body`
- `team_title`, `team_body`

3. `corporate_page_fields`

- `header_title_image`
- `hero_title`, `hero_subtitle`, `hero_body`
- `benefits` (repeater: `text`)

## 2. Next.js CMS access layer (single reusable pattern)

1. Add `src/lib/cms/wp-client.ts`

- `wpFetch<T>(path: string, init?: RequestInit): Promise<T>`
- Base URL from `NEXT_PUBLIC_CMS_BASE_URL`
- Standardized error handling with route/page context

2. Add `src/lib/cms/page-content.ts`

- `getWpPageBySlug(slug: string)`
- `mapHomeContent(raw)`, `mapAboutContent(raw)`, `mapCorporateContent(raw)` returning typed frontend models

3. Add types in `src/app/types/cms-page.type.ts` for all phase-1 page models.

## 3. Rendering architecture

1. Convert phase-1 route files to server-driven pages that fetch CMS content at build/deploy.
2. Keep presentational/mobile logic in client components, receiving typed props from server page.
3. Introduce container/view split where needed:

- `page.tsx` (server fetch + mapping)
- `*-view.tsx` (client rendering with `useIsMobile` where required)

## 4. Build-time behavior and caching

1. For migrated pages, set static behavior explicitly:

- `export const dynamic = "force-static"`
- Default `fetch` cache behavior for build-time generation

2. No runtime fallback content path (per your instruction that content is generated during build/deploy).
3. Build should fail loudly if required CMS fields are missing for migrated pages.

## 5. Metadata migration

1. Move phase-1 page metadata (`title`, `description`, OG title/description/image) to WordPress ACF fields.
2. Use `generateMetadata` per route using same CMS content source to avoid copy drift.

## Public APIs / Interfaces / Types Changes

1. New env contract (already present, remains required):

- `NEXT_PUBLIC_CMS_BASE_URL`

2. New internal interfaces:

- `HomeCmsContent`
- `AboutCmsContent`
- `CorporateCmsContent`
- `WpPageResponse<TAcf>`

3. New internal fetch API:

- `wpFetch<T>()`
- `getWpPageBySlug(slug)`

4. Component props become typed CMS-driven props for migrated views.

## File-Level Execution Plan (Phase 1)

1. Add:

- `src/lib/cms/wp-client.ts`
- `src/lib/cms/page-content.ts`
- `src/app/types/cms-page.type.ts`

2. Update:

- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/corporate-video/page.tsx`

3. Add/adjust view components to accept CMS props:

- `src/app/components/hero.tsx`
- `src/app/components/trust.tsx`
- `src/app/components/services.tsx`
- Any newly created `*-view.tsx` wrappers

## Validation and Test Scenarios

1. Build and lint:

- `pnpm lint`
- `pnpm build`

2. CMS contract checks:

- Missing required field in ACF must fail build with clear message
- Invalid repeater shape must fail mapping/type guard

3. Functional checks:

- Home/About/Corporate render with CMS text and existing visuals
- Blog behavior remains unchanged
- Mobile and desktop variants still render correctly

4. Metadata checks:

- Page `<title>` and OG values match WordPress-managed values for migrated routes

## Rollout Plan

1. Phase 1 release: `Home + About + Corporate`
2. Phase 2: high-impact services (`motion-design`, `post-production`, `branding-and-design`, `audio`)
3. Phase 3: remaining pages/components and shared text fragments
4. For each phase: add ACF group, map type, migrate route, run build/lint, content QA in staging

## Assumptions and Defaults

1. WordPress has ACF installed and ACF fields exposed in REST.
2. Build/deploy pipeline has network access to `https://cms.viernes-studio.com`.
3. Content updates require redeploy (no live runtime refresh required).
4. For migrated pages, CMS data is source of truth; local hardcoded text is removed.
5. Blog implementation remains as-is and is not refactored in this scope.
