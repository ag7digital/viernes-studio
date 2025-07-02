"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PricingHome() {
  return (
    <>
      <div className="flex md:flex-row justify-center items-center flex-col bg-[url(/images/pricing-comex-avatar-bg.png)] min-h-screen w-auto bg-no-repeat bg-center bg-cover md:p-10 p-5">
        <div className="flex">
          <div className="flex justify-between items-center">
            {/** buttons */}
            <div className="flex flex-col gap-10 h-auto justify-center w-full ml-30">
              <Link href="/pricing/#keep-it-simple">
                <Image
                  src="/images/kis-button.png"
                  width={350}
                  height={150}
                  alt="Keep it simple therapy button"
                />
              </Link>
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
            </div>
            <div className="flex flex-col ml-50 w-full items-center">
              <div className="flex text-white flex-col items-center">
                <h2 className="playfulist text-5xl mb-5">
                  What is the price of
                </h2>
                <h3 className="moon uppercase text-5xl">motion therapy?</h3>
              </div>
              <div className="flex w-[80%] mt-10">
                <p className="montserrat tx-gray text-2xl font-bold">
                  To make things easier for you (and for us), we have designed 5
                  different motion therapies among which you can choose the one
                  that best fits your diagnosis. (Objectives, strategy,
                  audience, delivery time, and budget) 
                </p>
              </div>
              <div className="flex flex-col gap-10 mt-10">
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
          </div>
        </div>
      </div>
    </>
  );
}
