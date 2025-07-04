"use client";

import Image from "next/image";
import { useIsMobile } from "../hooks/mobile";

export default function VideoPromocional() {
  const isMobile = useIsMobile();
  const items = [
    "Generates interest and desire to purchase",
    "Differentiates the producto from the competition",
    "Increases the possibility of conversión to sales",
    "Allows reaching a higher audience",
    "Increases Brand awareness",
  ];

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-center w-full h-[50vh] md:h-[100vh] bg-[url(/images/promotional-header-bg.png)] bg-no-repeat bg-center">
        <div className="flex items-center justify-center py-5 ">
          <Image
            src="/images/promotional-header-title.png"
            width={isMobile ? 350 : 600}
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
                src="/images/promotional-avatar.png"
                width={358}
                height={704}
                alt="Video Corporativo Avatar"
                sizes="(max-width: 691px) 100vw, 691px"
              />
            </div>
          )}
          <div className="flex flex-col w-full justify-center">
            <h2 className="moon text-white text-4xl md:text-5xl mt-10 md:mt-0">
              Promotional Video
            </h2>
            <h3 className="spicy text-white text-4xl md:text-5xl mt-4">
              It's the keystone because it drives sales!
            </h3>
            <p className="montserrat text-black mt-5 font-medium text-[1.2rem] md:text-[1.3rem]">
              It is a key CREATIVE tool in marketing campaigns to attract the
              target audience, highlight benefits, and drive sales; it generates
              interest in your products or services by CONNECTING with your
              customers through STORYTELLING that resonates with their pain
              points, CREATING an emotional impact and a positive perception of
              the BRAND.
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
