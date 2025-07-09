"use client";
import Image from "next/image";
import React from "react";
import { useIsMobile } from "../hooks/mobile";

export default function Industries() {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-center w-full md:h-screen bg-[url(/images/industrias-header-bg.png)] bg-no-repeat md:bg-cover bg-center py-10">
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

      <div className="flex w-full md:flex-row flex-col h-auto bg-[url(/images/industrias-hero-bg.png)] bg-no-repeat md:bg-cover bg-center">
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
        <div className="flex">
          <Image
            src="/images/industries-english.png"
            width={1000}
            height={600}
            alt="Industries list"
            useMap="#image-map"
          />
          <map name="image-map">
            <area
              target="_blank"
              alt="HESQ"
              title="HESQ"
              href="https://youtube.com/playlist?list=PLCBy57mI0AAG33aUZMbhk1xf56wVs4Edr&amp;si=TNj_JH8Q9b_FnIyZ"
              coords="525,218,779,289"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Oil &amp; Gas"
              title="Oil &amp; Gas"
              href="https://youtube.com/playlist?list=PLCBy57mI0AAHRHwVBOHilEQijXzdstZz9&amp;si=NMQrfe8xJe0feKdN"
              coords="490,313,790,383"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Agriculture"
              title="Agriculture"
              href="https://youtube.com/playlist?list=PLCBy57mI0AAFhkaApIKZFJcuAC519TSbG&amp;si=MkqBe8EPqtNssti7"
              coords="300,407,777,487"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Construction"
              title="Construction"
              href="https://youtube.com/playlist?list=PLCBy57mI0AAFVx1qQqafM8IZwammNrQ7D&amp;si=moLyRBTUpdW_GKLy"
              coords="302,507,782,575"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Human Resources"
              title="Human Resources"
              href="https://youtube.com/playlist?list=PLCBy57mI0AAGV4ji8KOwz67u7FzCGLvKj&amp;si=uq-ToqJYh_gNTRTF"
              coords="274,601,782,675"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Internal Communications"
              title="Internal Communications"
              href="https://youtube.com/playlist?list=PLCBy57mI0AAGV4ji8KOwz67u7FzCGLvKj&amp;si=uq-ToqJYh_gNTRTF"
              coords="136,703,781,772"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Pharmaceutical Marketing"
              title="Pharmaceutical Marketing"
              href="https://youtube.com/playlist?list=PLCBy57mI0AAGh8K0yYrS4ufHUwNvVkNVI&amp;si=Bv-zhN_rVExgslDz"
              coords="95,794,786,867"
              shape="rect"
            />
          </map>
        </div>
      </div>
    </>
  );
}
