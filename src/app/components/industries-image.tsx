"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function IndustriesImage() {
  const handleImageLoaded = async () => {
    const imageMapResize = (await import("image-map-resizer")).default;
    imageMapResize();
  };
  return (
    <>
      <div className="flex only-desktop">
        <img
          src="/images/industries-english.png"
          alt="Industries"
          useMap="#imageMap"
          onLoad={handleImageLoaded}
        />
        <map name="imageMap">
          <area
            target="_blank"
            alt="HESQ"
            title="HESQ"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAG33aUZMbhk1xf56wVs4Edr&amp;si=TNj_JH8Q9b_FnIyZ"
            coords="543,305,708,377"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Oil &amp; Gas"
            title="Oil &amp; Gas"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAHRHwVBOHilEQijXzdstZz9&amp;si=NMQrfe8xJe0feKdN"
            coords="421,310,708,432"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Agriculture"
            title="Agriculture"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAFhkaApIKZFJcuAC519TSbG&amp;si=MkqBe8EPqtNssti7"
            coords="360,442,714,522"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Construction"
            title="Construction"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAFVx1qQqafM8IZwammNrQ7D&amp;si=moLyRBTUpdW_GKLy"
            coords="325,532,721,610"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Human Resources"
            title="Human Resources"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAGV4ji8KOwz67u7FzCGLvKj&amp;si=uq-ToqJYh_gNTRTF"
            coords="189,720,726,800"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Internal Communication"
            title="Internal Communication"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAGV4ji8KOwz67u7FzCGLvKj&amp;si=uq-ToqJYh_gNTRTF"
            coords="86,809,731,895"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Pharmaceutical Marketing"
            title="Pharmaceutical Marketing"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAGh8K0yYrS4ufHUwNvVkNVI&amp;si=Bv-zhN_rVExgslDz"
            coords="21,900,722,1076"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Sustainability"
            title="Sustainability"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAGC8D2yHREYwmWBj72jrdQi&amp;si=9FyUp1ycg6iWfnNf"
            coords="292,620,721,710"
            shape="rect"
          />
        </map>
      </div>
      <div className="grid grid-cols-1 gap-3 px-10 md:hidden">
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link
            href="https://youtube.com/playlist?list=PLCBy57mI0AAG33aUZMbhk1xf56wVs4Edr&si=TNj_JH8Q9b_FnIyZ"
            target="_blank"
            rel="noopener noreferer"
          >
            hesq
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAHRHwVBOHilEQijXzdstZz9&si=NMQrfe8xJe0feKdN">
            Oil & Gas
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAFhkaApIKZFJcuAC519TSbG&si=MkqBe8EPqtNssti7">
            Agriculture
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAFVx1qQqafM8IZwammNrQ7D&si=moLyRBTUpdW_GKLy">
            construction
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAGC8D2yHREYwmWBj72jrdQi&si=9FyUp1ycg6iWfnNf">
            Sustainability
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAGV4ji8KOwz67u7FzCGLvKj&si=uq-ToqJYh_gNTRTF">
            Human Resources
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAGV4ji8KOwz67u7FzCGLvKj&si=uq-ToqJYh_gNTRTF">
            Internal Communications
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAGh8K0yYrS4ufHUwNvVkNVI&si=Bv-zhN_rVExgslDz">
            Pharmaceutical Marketing
          </Link>
        </Button>
      </div>
    </>
  );
}
