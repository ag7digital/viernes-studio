"use client";

import Link from "next/link";
import { useIsMobile } from "../hooks/mobile";
import { Button } from "./ui/button";

export default function MotionDesignPower() {
  const isMobile = useIsMobile();
  return (
    <div className="flex md:flex-row flex-col bg-[url(/images/bg-motion-design-poder.png)] bg-no-repeat bg-center bg-cover md:p-10 p-5">
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="moon tx-gray uppercase text-4xl md:text-5xl">
          the power
        </h2>
        <h2 className="cardenio text-white text-5xl md:text-7xl">
          of motion design
        </h2>
        <p className="montserrat text-white text-center w-full md:w-[60%] font-medium leading-7 mt-8 text-[1.2rem] md:text-2xl">
          It is ideal for any type of company, has an excellent cost-benefit
          ratio compared to other animation techniques, and we can create
          IMPACTFUL videos with STRATEGIC and visually, appealing messages for
          every AUDIENCE in just a few weeks.
        </p>
        <p className="montserrat text-white text-center w-full md:w-[60%] font-medium leading-7 mt-8 text-[1.2rem] md:text-2xl">
          So flexible and versatile that we can create different solutions based
          on your needs.
        </p>
      </div>
      {isMobile && (
        <div className="grid grid-cols-2 gap-3 px-5 mt-5">
          <Button className="cardenio text-emerald-900 font-bold text-[1.2rem] py-5 px-5 mb-5 bg-amber-50">
            <Link href="/corporate-video">Corporate</Link>
          </Button>
          <Button className="cardenio text-emerald-900 font-bold text-[1.2rem] py-5 px-5 mb-5 bg-amber-50">
            <Link href="/promotional-video">Promotional</Link>
          </Button>
          <Button className="cardenio text-emerald-900 font-bold text-[1.2rem] py-5 px-5 mb-5 bg-amber-50">
            <Link href="/training-video">Training</Link>
          </Button>
          <Button className="cardenio text-emerald-900 font-bold text-[1.2rem] py-5 px-5 mb-5 bg-amber-50">
            <Link href="/explainer-video">Explainer</Link>
          </Button>
        </div>
      )}
      {!isMobile && (
        <div className="flex w-full">
          <picture>
            <img
              src="/images/motion-design-power.png"
              useMap="#tiposVideoMap"
              alt="Tipos de Video"
              style={{ width: "100%", maxWidth: "836px" }}
            />
          </picture>
          <map name="tiposVideoMap">
            <area
              target=""
              alt="Corporate Video"
              title="Corporate Video"
              href="/corporate-video"
              coords="348,117,149,26"
              shape="rect"
            />
            <area
              target=""
              alt="Promotional Video"
              title="Promotional Video"
              href="/promotional-video"
              coords="497,14,717,122"
              shape="rect"
            />
            <area
              target=""
              alt="Explainer Video"
              title="Explainer Video"
              href="/explainer-video"
              coords="99,193,333,289"
              shape="rect"
            />
            <area
              target=""
              alt="Training Video"
              title="Training Video"
              href="/training-video"
              coords="545,172,751,306"
              shape="rect"
            />
          </map>
        </div>
      )}
    </div>
  );
}
