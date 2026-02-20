# Guía sencilla para actualizar los textos del sitio de Viernes Studio

## 1. ¿Qué hay dentro del proyecto?

El sitio está hecho con Next.js, pero no necesitas saber programar para cambiar textos. Solo debes saber en qué archivo está cada página.

- **Carpeta principal de contenidos:** `src/app`
- **Componentes reutilizables (bloques que se repiten en varias páginas):** `src/app/components`
- **Imágenes y videos:** `public/images` y `public/videos`

### Páginas más importantes

| Página del sitio                                             | Archivo que contiene los textos                                                                                                                   | Qué encontrarás allí                                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Inicio                                                       | [src/app/page.tsx](src/app/page.tsx)                                                                                                              | Botón de descarga de portafolio, tarjeta de testimonios, servicios destacados.             |
| Sobre nosotros                                               | [src/app/about/page.tsx](src/app/about/page.tsx)                                                                                                  | Secciones "What we do", "What we are", propuesta de valor y equipo.                        |
| Servicios especializados (ej. motion design, branding, etc.) | Archivos dentro de `src/app/<nombre-del-servicio>/page.tsx`                                                                                       | Cada carpeta corresponde a una página; abre el archivo `page.tsx` para editar textos.      |
| Blog                                                         | [src/app/blog/page.tsx](src/app/blog/page.tsx) y [src/app/blog/[slug]/page.tsx](src/app/blog/%5Bslug%5D/page.tsx)                                 | Listado general y detalle de cada artículo.                                                |
| Formularios de contacto/blog                                 | [src/app/components/contact-form.tsx](src/app/components/contact-form.tsx) y [src/app/components/blog-form.tsx](src/app/components/blog-form.tsx) | Títulos y mensajes de los formularios.                                                     |
| Elementos compartidos (hero, testimonios, portafolio, etc.)  | Archivos dentro de `src/app/components`                                                                                                           | Textos que se repiten en varias páginas. Cambia aquí y el cambio se verá en todo el sitio. |

> **Tip:** Si no encuentras un texto en la página principal (`page.tsx`), búscalo dentro de la carpeta `components`. Muchos textos viven en estos archivos porque se reutilizan.

## 2. Pasos para cambiar un texto

1. **Haz una copia de seguridad** del proyecto o del archivo que vas a editar (por ejemplo, duplicando el archivo).
2. **Abre el archivo correcto** en tu editor (VS Code o similar). Usa la tabla anterior para saber dónde está cada página.
3. **Busca la frase exacta** que quieres modificar (Ctrl/Cmd + F).
4. **Edita el texto** directamente entre las comillas. No modifiques nada fuera del texto para evitar errores.
5. **Guarda el archivo** (Ctrl/Cmd + S).
6. **Revisa el sitio en el navegador**. Si estás trabajando con alguien técnico, pídele que ejecute `pnpm dev` y abra `http://localhost:3000` para confirmar que todo se ve bien.

## 3. Buenas prácticas

- **Respeta mayúsculas y estilos:** Hay palabras que van en mayúsculas por diseño (ej. `IDEAS`, `CONNECT`).
- **Mantén las etiquetas especiales:** Si ves algo como `<span className="text-[#e5e067]">`, deja esa parte intacta y cambia solo el texto entre `>` y `<`.
- **Evita borrar comillas o llaves `{}`:** Son parte del código y, si desaparecen, la página puede dejar de funcionar.
- **Comprueba la ortografía** antes de guardar.
- **Habla con el equipo** antes de borrar secciones completas; quizá se usan en otra página.

## 4. ¿Necesitas agregar una nueva sección? (versión corta)

1. Copia una sección parecida del mismo archivo.
2. Pega el bloque justo debajo.
3. Cambia los textos y, si hace falta, las imágenes (`src="/images/..."`).
4. Guarda y revisa el sitio.

Si necesitas algo más complejo (nuevas páginas, galerías, animaciones), es mejor pedir ayuda técnica.

## 5. Glosario rápido

- **Componente:** Un bloque reutilizable (por ejemplo, el mismo testimonio que se ve en varias páginas).
- **Slug:** El nombre que aparece en la URL de un blog (`/blog/mi-articulo`).
- **Hero:** La sección grande que ves al inicio de la página.

---

Siempre que tengas dudas, anota qué archivo estabas tocando y qué texto cambiaste. Así el equipo técnico puede ayudarte rápidamente si algo no sale como esperabas.
