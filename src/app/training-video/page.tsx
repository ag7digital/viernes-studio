"use client";

import Image from "next/image";
import { useIsMobile } from "../hooks/mobile";

export default function VideoPromocional() {
  const isMobile = useIsMobile();
  const items = [
    "Time and resource savings",
    "Improved retention of information",
    "Adaptability to different learning styles",
  ];

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-center w-full h-[50vh] md:h-[100vh] bg-[url(/images/training-header-bg.png)] bg-no-repeat bg-center">
        <div
          className="flex justify-evenly content-evenly gap-10 w-[80%]"
          style={{ display: isMobile ? "none" : "flex" }}
        >
          <Image
            src="/images/training-header-avatar.png"
            width={400}
            height={600}
            alt=""
          />

          <Image
            src="/images/promotional-header-title.png"
            width={400}
            height={600}
            alt=""
          />
        </div>

        <div
          className="flex justify-evenly content-evenly gap-10 w-[80%]"
          style={{ display: isMobile ? "flex" : "none" }}
        >
          <Image
            src="/images/promotional-header-title.png"
            width={400}
            height={600}
            alt=""
          />
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="flex bg-no-repeat items-center justify-center bg-cover h-auto bg-[url(/images/corporate-bg.png)]">
        <div className="flex md:w-[80%] w-full px-5 md:px-0">
          {!isMobile && (
            <div className="flex pl-10 w-full">
              <Image
                src="/images/training-avatar.png"
                width={358}
                height={704}
                alt="Video Corporativo Avatar"
                sizes="(max-width: 691px) 100vw, 691px"
              />
            </div>
          )}
          <div className="flex flex-col w-full justify-center">
            <h2 className="moon text-white text-4xl md:text-5xl mt-10 md:mt-0">
              Training Video
            </h2>
            <h3 className="spicy text-white text-4xl md:text-5xl mt-4">
              We all have room to grow and learn!
            </h3>
            <p className="montserrat text-black mt-5 font-medium text-[1.2rem] md:text-[1.3rem]">
              Its goa lis to TEACH clearly, quickly, and a large scale; it is a
              used to train your employees in technical KNOWLEDGE, safety
              procedures, company generalities, and even specific job
              instructions. This tool reaches large audiences with excellent
              cost-effectiveness.
            </p>
            <div className="flex flex-col mt-5 text-black font-medium montserrat pb-10">
              <ul>
                {items.map((item, index) => (
                  <li key={`redes-item-${index}`}>
                    <div className="flex items-center">
                      <Image
                        src="/images/check.svg"
                        width={24}
                        height={24}
                        alt="check"
                        className="mr-2"
                      />
                      <span className="montserrat  md:text-[1.2rem]">
                        {item}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
