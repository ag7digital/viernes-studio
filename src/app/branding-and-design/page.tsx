"use client";

import React from "react";

export default function Branding() {
  return (
    <>
      <div className="flex items-center justify-center w-full bg-[url(/images/bg-branding.png)] bg-no-repeat h-screen md:min-h-[50vh] py-8">
        <div className="flex items-center justify-center">
          <div className="playfulist text-white text-3xl sm:text-4xl md:text-6xl leading-8 md:leading-19 w-full md:w-[65%] px-10 text-center">
            <span className="text-[#f2b346] ">We research</span>, design, and
            plan every detail to ensure your
            <span className="text-[#f2b346] "> BRAND </span>reflects its
            personality and clearly defined purpose.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full min-h-screen bg-[url(/images/branding-bg-section.png)] bg-no-repeat bg-center bg-cover py-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-full md:w-[80%] gap-8 pt-5 pb-10 px-5">
          <div className="flex flex-col w-full">
            <p className="spicy text-white text-6xl md:text-8xl">
              Branding & Design
            </p>
            <p className="montserrat tx-gray font-bold mt-5">
              We turn your visión into a strong identity that not only looks
              Good but conveys purpose and consistency.
            </p>
            <p className="montserrat tx-gray font-bold mt-5">
              From concept t okey Brand assets, we build memorable identities
              that connect, stand out in the market, and clearly express what
              your Brand stands for.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl w-[80%] px-10 text-center">
            <span className="cardenio tx-gray text-4xl font-bold">
              brand design:
            </span>
            <p className="montserrat tx-gray mt-5 text-1xl">
              We create brands that professionally and effectively represent
              your company's corporate identity, highlighting its values and
              positioning.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl w-[80%] px-10 text-center">
            <span className="cardenio tx-gray text-4xl font-bold">
              brand guidelines:
            </span>
            <p className="montserrat tx-gray mt-5 text-1xl">
              We design Brand manuals that tell your brand's story, aligning
              every visual and conceptual detail to convey its essence and
              personality.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl w-[80%] px-10 text-center">
            <span className="cardenio tx-gray text-4xl font-bold">
              designs aligned with strategy:
            </span>
            <p className="montserrat tx-gray mt-5 text-1xl">
              We design graphic assets aligned with each campaign's strategy.
              Every visual element is intentional, reinforcing your message,
              maintaining visual consistency, and creating meaningful connection
              with your audience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
