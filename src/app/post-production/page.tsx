"use client";
import Image from "next/image";
import { useIsMobile } from "@/app/hooks/mobile";

export default function PostProduccion() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-center w-full bg-[url(/images/post-header-bg.png)] bg-no-repeat h-screen md:min-h-[50vh] py-8">
        <div className="flex items-center justify-center">
          <div className="cardenio text-white font-bold text-3xl sm:text-4xl md:text-6xl leading:10 md:leading-8 md:leading-19 w-full md:w-[65%] px-10 text-center">
            WE ARE A <span className="text-[#293654] playfulist">team</span>,
            WITH <span className="text-[#293654] playfulist">audiovisual</span>{" "}
            EXPERTISE,{" "}
            <span className="text-[#293654] spicy text-[3rem] md:text-[5rem]">
              Artistic{" "}
            </span>
            EXPERIENCE, AND CONTINUOUS
            <span className="text-[#293654] playfulist "> learning, </span>
            ALL FOCUSED ON{" "}
            <span className="text-[#293654] playfulist ">supporting</span> OUR
            CLIENT'S STRATEGIES.
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full bg-[url(/images/post-background.png)] bg-no-repeat min-h-screen py-8 px-8">
        <div className="flex w-[80%]">
          <Image
            src="/images/post-image-avatar.png"
            width={800}
            height={645}
            alt="Post Designer"
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:min-h-screen md:py-8">
          <div className="flex flex-col md:container text-center justify-center items-center px-5 md:px-10 md:justify-center md:align-center">
            <h2 className="moon text-white md:text-5xl text-3xl">
              POST SERVICES
            </h2>
            <p className="montserrat tx-gray font-medium mt-10 text-center text-2xl md:text-2xl mb-5">
              Editing, compositing, VFX, color grading, 2D/3D animation,
              rotoscoping and motion graphics. All handled in our
              post-production and animation suites, with the capacity to work
              with uncompressed material in HD, 2K and 4K.
            </p>
            <div className="flex w-full items-center justify-center mt-10">
              <div className="grid grid-rows-1 grid-cols-3 gap-15">
                <Image
                  src="/images/headphones.svg"
                  width={145}
                  height={147}
                  alt="Audífonos"
                />
                <Image
                  src="/images/screen.svg"
                  width={145}
                  height={147}
                  alt="Pantalla"
                />
                <Image
                  src="/images/microphone.svg"
                  width={91}
                  height={147}
                  alt="Micrófono"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
