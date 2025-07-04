"use client";

import Image from "next/image";
import { useIsMobile } from "../hooks/mobile";

export default function VideoCorporativo() {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-center w-full h-[50vh] md:h-[100vh] bg-[url(/images/corporate-header-bg.png)] bg-no-repeat bg-center">
        <div className="flex items-center justify-center py-5 ">
          <Image
            src="/images/corporate-header-title.png"
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
                src="/images/corporativo-avatar.png"
                width={358}
                height={704}
                alt="Video Corporativo Avatar"
                sizes="(max-width: 691px) 100vw, 691px"
              />
            </div>
          )}
          <div className="flex flex-col w-full justify-center">
            <h2 className="moon text-white text-4xl md:text-5xl mt-10 md:mt-0">
              Corporate
            </h2>
            <h3 className="spicy text-white text-4xl md:text-5xl mt-4">
              Your company has many stories to tell!
            </h3>
            <p className="montserrat text-black mt-5 font-medium text-[1.2rem] md:text-[1.3rem]">
              Convey the company's PORPUSE. Corporate videos are designed to
              build a COMMUNITY base don its VALUES and beliefs, which enchances
              BRAND positioning. A corporate video does not aim to promote
              products or services, but rather to highlight the organizational
              CULTURE, its history, and iths staff; in order to créate an
              EMOTIONAL connection with the audience and differentiate itself
              from the competition.
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
                      Increased community engagement
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
                      Improved Brand positioning
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
                      Attraction of Human Talent
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
