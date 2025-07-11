"use client";

import Image from "next/image";
import { useIsMobile } from "../hooks/mobile";

export default function VideoExplicativo() {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Header */}
      <div className="flex w-full h-screen">
        <div className="relative w-full h-full">
          <h1 style={{ display: "hidden", color: "#fff" }}>
            realizamos cada proyecto con estándares de CALIDAD SUPERIOR en
            TÉCNICA, CREATIVIDAD, ESTRATEGIA.
          </h1>
          <Image
            src={
              isMobile
                ? "/images/explainer-header-bg-mobile.png"
                : "/images/explainer-header-bg-desktop.png"
            }
            className="object-fill"
            fill
            alt="videos explicativos"
          />
        </div>
      </div>
      {/* HERO SECTION */}
      <div className="flex bg-no-repeat items-center justify-center bg-cover h-auto bg-[url(/images/explainer-bg.png)]">
        <div className="flex md:w-[80%] w-full px-5 md:px-0 items-center justify-center">
          <div className="flex flex-col w-full justify-center md:ml-15">
            <h2 className="moon text-white text-4xl md:text-5xl mt-10 md:mt-0">
              Explainer Video
            </h2>
            <h3 className="spicy text-white text-5xl md:text-5xl mt-4">
              People love clarity!
            </h3>
            <p className="montserrat text-black mt-5 font-medium text-[1.2rem] md:text-[1.3rem]">
              Customers often struggle to UNDERSTAND how to use products or
              services; these VIDEOS simpligy complex CONCEPTS, PROCESSES, and
              IDEAS; clearly covering their FUNCTIONALITY,FEATURES, and
              BENEFITS. After all, people don't buy what they don't understand.
            </p>
            <div className="flex flex-col mt-5 text-black font-medium montserrat pb-10">
              <ul>
                <li>
                  <div className="flex items-center">
                    <Image
                      src="/images/check.svg"
                      width={24}
                      height={24}
                      alt="check"
                      className="mr-2"
                    />
                    <span className="montserrat  md:text-[1.2rem]">
                      Facilitates decisión-making
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <Image
                      src="/images/check.svg"
                      width={24}
                      height={24}
                      alt="check"
                      className="mr-2"
                    />
                    <span className="montserrat  md:text-[1.2rem]">
                      Increases sales conversión rate
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <Image
                      src="/images/check.svg"
                      width={24}
                      height={24}
                      alt="check"
                      className="mr-2"
                    />
                    <span className="montserrat  md:text-[1.2rem]">
                      Strengthens producto value
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {!isMobile && (
            <div className="flex justify-center w-full">
              <Image
                src="/images/explainer-avatar.png"
                width={358}
                height={704}
                alt="Video Explicativo Avatar"
                sizes="(max-width: 691px) 100vw, 691px"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
