"use client";
import React from "react";
import { useIsMobile } from "../hooks/mobile";
import Image from "next/image";

export default function Nosotros() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Header */}
      <div className="flex items-start justify-center w-full min-h-[70vh] bg-[url(/images/quienes-somos-header-bg.png)] bg-no-repeat md:bg-cover bg-center">
        <div className="flex md:mt-10 mt-30">
          <Image
            src="/images/about-us-header-title.png"
            width={800}
            height={433}
            alt=""
          />
        </div>
      </div>
      {/* What we do */}
      <div className="flex items-center justify-center bg-[url(/images/quienes-somos-lo-que-hacemos-bg.png)] bg-no-repeat bg-cover bg-center md:min-h-screen py-10">
        <div className="flex items-center justify-center w-[80%]">
          <div className="flex flex-col item-center justify-center w-full md:w-[50%] text-center">
            <h2 className="moon text-white text-3xl md:text-5xl">What we do</h2>
            <p className="playfulist mt-10 text-[1.4rem] md:text-4xl tx-gray md:leading-12">
              We create <span className="text-[#e5e067]">IDEAS</span>,{" "}
              <span className="text-[#e5e067]">CONCEPTS</span> and strategies
              that become <span className="text-[#e5e067]">EFFECTIVE </span>
              digital content, achieving your{" "}
              <span className="text-[#e5e067]">MARKETING</span> AND{" "}
              <span className="text-[#e5e067]">COMUNICACIÓN</span> goals.
            </p>
          </div>
          <div className="flex">
            <Image
              src="/images/quienes-somos-lo-que-hacemos-avatar.png"
              width={400}
              height={300}
              alt=""
              style={{ display: isMobile ? "none" : "block" }}
            />
          </div>
        </div>
      </div>
      {/* What we are */}
      <div className="flex items-center justify-center bg-[url(/images/quienes-somos-bg.png)] bg-no-repeat bg-cover bg-center md:min-h-screen py-10">
        <div className="flex items-center justify-center w-[80%]">
          <div className="flex">
            <Image
              src="/images/quienes-somos-avatar.png"
              width={350}
              height={300}
              alt=""
              style={{ display: isMobile ? "none" : "block" }}
            />
          </div>
          <div className="flex flex-col item-center justify-center w-full md:w-[50%] text-center">
            <h2 className="moon text-white text-3xl md:text-5xl">
              What we are
            </h2>
            <p className="playfulist mt-10 text-[1.4rem] md:text-4xl text-white md:leading-12">
              We are a team of artists and{" "}
              <span className="text-[#354266]">CREATIVES</span> who bring our
              skills to the development of{" "}
              <span className="text-[#354266]">AUDIOVISUAL</span> projects that
              communicate our <span className="text-[#354266]">CLIENT'S </span>
              messages effectively and help them connect with their audiences.
            </p>
            <p className="playfulist mt-10 text-[1.4rem] md:text-4xl text-white md:leading-12">
              From concept development, scriptwriting, filming, illustration,
              and <span className="text-[#354266]">ANIMATION </span> to editing,
              we put our passion, dedication, and{" "}
              <span className="text-[#354266]">CREATIVITY</span> at the service
              of the companies that trust in us.
            </p>
          </div>
        </div>
      </div>
      {/* Value Proposition */}
      <div className="flex items-center justify-center bg-[url(/images/quienes-somos-propuesta-valor-bg.png)] bg-no-repeat bg-cover bg-center md:min-h-screen py-10">
        <div className="flex items-center justify-center w-[80%]">
          <div className="flex flex-col item-center justify-center w-full md:w-[50%] text-center">
            <h2 className="moon text-white text-3xl md:text-5xl">
              Value Proposition
            </h2>
            <p className="playfulist mt-10 text-[1.4rem] md:text-4xl text-white md:leading-12">
              At <span className="text-[#e5e067]">VIERNES STUDIO</span> , we
              transform ideas into memorable{" "}
              <span className="text-[#e5e067]">VIDEOS</span> that captive,{" "}
              <span className="text-[#e5e067]">CONNECT</span> and convert. We
              blend creativity with
              <span className="text-[#e5e067]"> STRATEGY </span> to craft
              digital content that elevates your{" "}
              <span className="text-[#e5e067]">BRAND</span> and delivers
              measurable results.
            </p>
          </div>
          <div className="flex">
            <Image
              src="/images/quienes-somos-propuesta-valor-avatar.png"
              width={350}
              height={300}
              alt=""
              style={{ display: isMobile ? "none" : "block" }}
            />
          </div>
        </div>
      </div>
      {/* A well formed team */}
      <div className="flex items-center justify-center bg-[url(/images/quienes-somos-equipo-bg.png)] bg-no-repeat bg-cover bg-center md:min-h-screen py-10">
        <div className="flex items-center justify-center w-[80%]">
          <div className="flex">
            <Image
              src="/images/motion-simple-avatar.png"
              width={300}
              height={300}
              alt=""
              style={{ display: isMobile ? "none" : "block" }}
            />
          </div>
          <div className="flex flex-col item-center justify-center w-full md:w-[50%] text-center">
            <h2 className="moon text-white text-3xl md:text-5xl">
              A well formed team
            </h2>
            <p className="playfulist mt-10 text-[1.4rem] md:text-4xl text-white md:leading-12">
              A well formed team We are a group of{" "}
              <span className="tx-gray">TALENTED</span> artists and{" "}
              <span className="tx-gray">PASSIONATE </span>strategists; we
              research, experiment, and design{" "}
              <span className="tx-gray">VIDEOS</span> that, with our knowledge,
              experience, and adherence to global trends, achieve the{" "}
              <span className="tx-gray">GOALS </span> of our{" "}
              <span className="tx-gray">CLIENTS</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
