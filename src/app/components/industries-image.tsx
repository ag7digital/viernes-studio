"use client";

import React from "react";

export default function IndustriesImage() {
  const handleImageLoaded = async () => {
    const imageMapResize = (await import("image-map-resizer")).default;
    imageMapResize();
  };
  return (
    <>
      <div className="flex w-[80%]">
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
            coords="1076,610,1457,758"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Oil &amp; Gas"
            title="Oil &amp; Gas"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAHRHwVBOHilEQijXzdstZz9&amp;si=NMQrfe8xJe0feKdN"
            coords="839,800,1457,971"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Agriculture"
            title="Agriculture"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAFhkaApIKZFJcuAC519TSbG&amp;si=MkqBe8EPqtNssti7"
            coords="714,1005,1454,1166"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Construcción"
            title="Construcción"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAFVx1qQqafM8IZwammNrQ7D&amp;si=moLyRBTUpdW_GKLy"
            coords="645,1201,1452,1362"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Sustainability"
            title="Sustainability"
            href="/missing"
            coords="569,1397,1454,1567"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Human Resources"
            title="Human Resources"
            href="/missing"
            coords="375,1587,1463,1758"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Internal Communications"
            title="Internal Communications"
            href="/missing"
            coords="179,1800,1448,1945"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Pharmaceutical"
            title="Pharmaceutical"
            href="https://youtube.com/playlist?list=PLCBy57mI0AAGh8K0yYrS4ufHUwNvVkNVI&amp;si=Bv-zhN_rVExgslDz"
            coords="39,2001,1459,2162"
            shape="rect"
          />
        </map>
      </div>
    </>
  );
}
