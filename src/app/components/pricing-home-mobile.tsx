"use client";

import Image from "next/image";
import React from "react";

export default function PricingHomeMobile() {
  return (
    <>
      <div className="flex justify-center items-center flex-col bg-[url(/images/pricing-bg.png)] h-auto w-auto bg-no-repeat bg-center bg-fixed p-5">
        <div className="flex text-white flex-col w-full items-center">
          <h2 className="playfulist text-4xl mb-2">What is the price of</h2>
          <h3 className="moon uppercase text-3xl">motion therapy?</h3>
        </div>
        <div className="flex mt-10">
          <p className="montserrat tx-gray text-2xl font-bold">
            To make things easier for you (and for us), we have designed 5
            different motion therapies among which you can choose the one that
            best fits your diagnosis. (Objectives, strategy, audience, delivery
            time, and budget) 
          </p>
        </div>
        <div className="flex flex-col gap-10 h-auto justify-center w-full px-5 mt-5">
          <Image
            src="/images/kis-button.png"
            width={350}
            height={150}
            alt="Keep it simple therapy button"
          />
          <Image
            src="/images/mib-button.png"
            width={350}
            height={150}
            alt="Make it better therapy button"
          />
          <Image
            src="/images/gb-button.png"
            width={350}
            height={150}
            alt="Go beyond therapy button"
          />
          <Image
            src="/images/avatar-button.png"
            width={350}
            height={150}
            alt="Make it better therapy button"
          />
          <Image
            src="/images/infinite-zoom-button.png"
            width={350}
            height={150}
            alt="Make it better therapy button"
          />
        </div>
      </div>
    </>
  );
}
