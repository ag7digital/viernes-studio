"use client";

import React from "react";
import { Button } from "../components/ui/button";

export default function Audio() {
  return (
    <>
      <div className="flex items-center justify-center w-full bg-[url(/images/bg-header-audio.png)] bg-no-repeat md:min-h-[50vh] h-screen py-10">
        <div className="flex items-center justify-center">
          <div className="moon text-white text-2xl sm:text-4xl md:text-5xl leading-10 md:leading-19 w-[65%] text-center">
            Every production is an opportunity to
            <span className="text-[#a2c791] "> CREATE </span>, captivate, and
            <span className="text-[#a2c791] "> CONNECT </span>
            with your audience in an
            <span className="text-[#a2c791]"> AUTHENTIC </span> and
            <span className="text-[#a2c791]"> IMPACTFUL </span> way
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-center w-full min-h-[60vh] md:min-h-[60vh] bg-[url(/images/audio-bg-types.png)] bg-no-repeat bg-cover">
        <p className="tx-gray uppercase text-5xl md:text-6xl font-bold">
          audio
        </p>
      </div>
      <div className="flex items-center justify-center px-10 md:px-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[100%] md:w-[70%] sm:w-[100%]">
          {/** Radio Spot */}
          <div className="flex flex-col h-[300px] justify-around">
            <span className="spicy text-[#3cc6af] text-5xl md:text-6xl">
              Radio Spot
            </span>
            <p className="montserrat tx-gray">
              We <b>CREATE</b> messages that truly <b>CONNECT</b>, tailoring
              each radio spot to your <b>BRAND's</b>. tone and personality. We
              give voice to your ideas with creativity and focus, achieving{" "}
              <b>COMMUNICATION</b> that is clear, memorable, and authentic.
            </p>
            <Button className="moon bg-[#b1d8ef] hover:bg-[#b1d8ef]  tx-gray w-[80px] text-1xl mt-5">
              <a
                href="https://youtube.com/playlist?list=PLCBy57mI0AAGUnGzcv0OI_Jd4Sp_10NET&si=UoYKoO0ES0a4f3jT"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer"
              >
                Demo
              </a>
            </Button>
          </div>

          {/** Podcast */}
          <div className="flex flex-col h-[300px] justify-around">
            <span className="spicy text-[#3cc6af] text-5xl md:text-6xl">
              Podcast
            </span>
            <p className="montserrat tx-gray">
              We turn <b>IDEAS</b> into voices that resonate. We produce
              podcasts with crear, compelling narratives, carefully crafted to
              ensure your <b>MESSAGE</b> stands out and leaves a lasting
              impresion.
            </p>
            <Button className="moon bg-[#b1d8ef] hover:bg-[#b1d8ef]  tx-gray w-[80px] text-1xl mt-5">
              <a
                href="https://youtu.be/t0Xk7ieBhHc?si=5TU9JuCl6RatSoGw"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer"
              >
                Demo
              </a>
            </Button>
          </div>

          {/** AI Music Production */}
          <div className="flex flex-col h-[300px] justify-around">
            <span className="spicy text-[#3cc6af] text-5xl md:text-5xl">
              AI Music Production
            </span>
            <p className="montserrat tx-gray">
              AI is redefining how we <b>CREATE</b> Sonic experiences. With
              <b>VERSATILITY</b> and style, we develop custom music for radio,
              events and <b>BTL</b>. ampaigns from catchy rhythms to melodies
              that truly make an <b>IMPACT</b>.
            </p>
            <Button className="moon bg-[#b1d8ef] hover:bg-[#b1d8ef]  tx-gray w-[80px] text-1xl mt-5">
              <a
                href="https://www.youtube.com/playlist?list=PLCBy57mI0AAGHrz4UOfLQnWVQWVqKYPiF "
                target="_blank"
                rel="noopener noreferrer"
                className="pointer"
              >
                Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
