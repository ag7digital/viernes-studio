"use client";

import Link from "next/link";
import { useIsMobile } from "../hooks/mobile";
import { Button } from "./ui/button";

export default function ServicesHome() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <>
          <div className="flex flex-col bg-gray-100">
            <div className="flex flex-col items-center justify-center w-full px-5 py-10">
              <h2 className="moon uppercase text-emerald-600 text-3xl md:text-4xl">
                producción
              </h2>
              <h3 className="spicy text-emerald-600 text-8xl -m-[15px]">
                audiovisual
              </h3>
              <p className="tx-gray mt-8 text-2xl md:text-3xl max-w-3xl text-center montserrat">
                Realizamos la producción integral de CONTENIDOS DIGITALES;
                rodando en estudios y locaciones o creando todo en nuestra sala
                de ANIMACIÓN y postproducción.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 px-5">
              <Button className="cardenio text-white text-[1.4rem] py-5 px-5 mb-5 bg-emerald-800">
                <Link href="/motion-design">motion design</Link>
              </Button>
              <Button className="cardenio text-white text-[1.4rem] py-5 px-5 mb-5 bg-emerald-800">
                <Link href="/post-production">post-production</Link>
              </Button>
              <Button className="cardenio text-white text-[1.4rem] py-5 px-5 mb-5 bg-emerald-800">
                <Link href="/branding-and-design">Branding & design</Link>
              </Button>
              <Button className="cardenio text-white text-[1.4rem] py-5 px-5 mb-5 bg-emerald-800">
                <Link href="/audio">audio</Link>
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex bg-gray-100">
            <div className="flex flex-col w-full">
              <picture>
                <img
                  src="/images/services.png"
                  alt="Servicios Audiovisuales"
                  useMap="#servicesMap"
                  style={{ width: "100%", maxWidth: "1000px" }}
                />
              </picture>
              <map name="servicesMap">
                <area
                  shape="rect"
                  coords="0,165,903,264"
                  href="/motion-design"
                  alt="Motion Design"
                />

                <area
                  shape="rect"
                  coords="0,264,903,365"
                  href="/post-production"
                  alt="Post-production"
                />

                <area
                  shape="rect"
                  coords="0,365,903,470"
                  href="/branding-and-design"
                  alt="Branding & Design"
                />

                <area
                  shape="rect"
                  coords="0,470,903,600"
                  href="/audio"
                  alt="Audio"
                />
              </map>
            </div>
            <div className="flex flex-col items-center justify-center w-full pr-8">
              <h2 className="moon uppercase text-emerald-600 text-4xl">
                audiovisual
              </h2>
              <h3 className="spicy text-emerald-600 text-8xl -m-[15px]">
                production
              </h3>
              <p className="tx-gray mt-8 text-2xl max-w-3xl text-center montserrat">
                We offer end-to-end production of DIGITAL CONTENT, filming on
                location or in studio, or developing everything in our ANIMATION
                and post-production suite
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
