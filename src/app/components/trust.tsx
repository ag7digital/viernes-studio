"use client";

import Image from "next/image";
import { useIsMobile } from "../hooks/mobile";

export default function Trust() {
  const isMobile = useIsMobile();
  return (
    <div className="flex min-h-screen bg-[url(/images/countries.png)] bg-no-repeat bg-center md:bg-cover">
      <div className="max-w-7xl w-full mx-auto py-16 px-4 mt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left column */}
          <div className="flex justify-start items-start">
            <p className="montserrat tx-gray text-center text-2xl md:text-xl mt-10 mx-10 md:mr-10 ">
              Fortunately, for the past 10 years, our team has supported
              hundreds of professionals by <br />
              <span className="font-bold">CREATING STRATEGIC</span> messages
              that achieve their <span className="font-bold">GOALS</span>.
            </p>
          </div>
          {/* Right column */}
          <div className="flex flex-col">
            <Image
              src="/images/counter-projects.png"
              alt="Projetos realizados"
              className="object-contain"
              width={1630}
              height={421}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src="/images/trust-title.png"
            alt="Quienes confían en nosotros"
            width={750}
            height={288}
          />
        </div>
        {!isMobile ? (
          <div className="relative w-full h-96">
            <Image
              src="/images/trust-companies.svg"
              alt="Quienes confían en nosotros"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw"
            />
          </div>
        ) : (
          <div className="relative w-full h-96 mt-10">
            <Image
              src="/images/logos-clientes-mobile.svg"
              alt="Quienes confían en nosotros"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw"
            />
          </div>
        )}
      </div>
    </div>
  );
}
