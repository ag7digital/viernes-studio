"use client";
import Image from "next/image";
import React from "react";
import { useIsMobile } from "../hooks/mobile";
import IndustriesImage from "../components/industries-image";

export default function Industries() {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-center w-full md:h-[80hv] bg-[url(/images/industrias-header-bg.png)] bg-no-repeat md:bg-cover bg-center py-10">
        <div className="flex w-[80%]">
          <div className="flex items-center justify-center gap-10 my-15">
            {!isMobile && (
              <Image
                src="/images/industrias-avatar.png"
                width={254}
                height={600}
                alt=""
              />
            )}
            <h1 className="cardenio text-3xl md:text-6xl text-center w-full md:w-[50%] text-emerald-800 font-bold">
              From pre-production to post-production, every Project strikes a
              balance between artistry,{" "}
              <span className="spicy font-medium text-5xl md:text-7xl text-blue-950 mr-5">
                strategy
              </span>
              and{" "}
              <span className="spicy font-medium text-5xl md:text-7xl text-blue-950">
                effective communication.
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex w-full md:flex-row flex-col h-auto bg-[url(/images/industrias-hero-bg.png)] bg-no-repeat md:bg-cover bg-center justify-between">
        <div className="flex flex-col justify-center items-center w-full md:w-[50%] md:ml-30 pt-10">
          <p className="montserrat text-white text-2xl text-center md:text-left md:text-3xl font-bold px-5 pb-10">
            We turn ideas into high-impact AUDIOVISUAL content. Our expertise
            lies in CREATING videos and assets tailored to the unique needs of
            key industries.
          </p>
          <p className="montserrat text-white text-2xl text-center md:text-left md:text-2xl font-bold px-5 pb-10">
            From compelling storyteeling to specialized TECHNICAL PRODUCTION, we
            craft CONTENT that resonates with your audience and strengthens your
            Brand MESSAGE.
          </p>
        </div>
        <IndustriesImage />
      </div>
    </>
  );
}
