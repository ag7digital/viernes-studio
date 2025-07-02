"use client";
import Image from "next/image";
import React from "react";
import { useIsMobile } from "../hooks/mobile";
import MotionService from "../components/motion-service";
import MotionServiceMobile from "../components/motion-service-mobile";

export default function Pricing() {
  const isMobile = useIsMobile();

  const services = {
    simple: [
      "Briefing",
      "AV Script",
      "Concept Art",
      "Simple illustration (text, icons and flat backgrounds)",
      "Storyboard",
      "AI image generation",
      "AI voice over (if required)",
      "Stock music and sound FX",
      "Basic 2D motion graphics (Kinetic typography, parallax effect)",
      "1 round of adjustments per stage",
      "Turn aroudn: 5 weeks",
      "Deliverables: Final video in FULL-HD",
      "(16:9) format and illustrations",
    ],
    better: [
      "Briefing",
      "AV Script",
      "Concept art",
      "Simple illustration /text, icons and flat backgrounds)",
      "Basic carácter design",
      "Storyboard",
      "AI image generation",
      "AI voice over",
      "Stock music and sound FX",
      "Basic 2D motion graphics and cut out animation",
      "2 rounds of adjustments per stage",
      "Turn around: 6 weeks",
      "Deliverables: Final video in Full-HD",
      "(16:9) format and illustrations",
      "1 social media cut (20 sec)",
    ],
    beyond: [
      "Briefing",
      "Storyline",
      "AV Script",
      "Creative concept",
      "Concept art",
      "Scketch ",
      "Vectorial illustration",
      "Full characters and background design",
      "AI voice over",
      "AI image generation",
      "Stock music and sound FX",
      "Cut out animation (characters rigging / lip sync)",
      "2 rounds of adjustments per stage",
      "Turna round: 7-8 weeks",
      "Deliverables: Final video in Full-HD - (16:9) format and illustrations",
      "1 social media cut (20 sec)",
    ],
    zoom: [
      "Briefing",
      "Creative concept",
      "Concept art",
      "AI image generation",
      "Stock music and sound FX",
      "Basic 2D motion graphics and cut out animation",
      "2 rounds of adjustments per stage",
      "Turna round: 3 weeks",
      "Deliverable: Final video in Full-HD (16:9) format",
    ],
    avatares: [
      "Briefing",
      "AV script",
      "Concept art",
      "Creative concept",
      "AI avatar generation",
      "AI voice over (if required)",
      "Stock music and sound FX",
      "Basic 2D motion grapics (Kinetic typography, parallax effect)",
      "1 round of adjustments per stage",
      "Turn around: 3 weeks",
      "Deliverable: Final video in Full-HD (16:9) format",
    ],
  };
  return (
    <>
      {/* Header */}
      <div className="flex w-full h-screen">
        <div className="relative w-full h-full">
          <h1 style={{ display: "hidden", color: "#fff" }}>
            Investigamos, experimentamos y diseñamos productos para afrontar
            cada proyecto con pasión y dedicación
          </h1>
          <Image
            src={
              isMobile
                ? "/images/pricing-header-mobile.png"
                : "/images/pricing-header.png"
            }
            className="object-fill"
            fill
            alt="Motion Header"
          />
        </div>
      </div>
      {/* Desktop */}
      {!isMobile && (
        <>
          <div id="keep-it-simple"></div>
          <MotionService
            avatarImg="/images/keep-is-simple-avatar.png"
            backgroundImage="/images/motion-simple-bg.png"
            position="L"
            title="keep it simple"
            subtitle="motion therapy"
            services={services.simple}
            text="Dr. Jones Will prescribe it to you when he has diagnosed that you have a simple message to convey to a large audience, and you have a tight time or Budget for the Project..<br/><br/>
                We can assure you that this is the best option to connect with your audience.
                "
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEUYE20PyO8yPjFhpGyny6n&si=Ej-7FtAE4FEJAIrw"
            price="2.000"
            duration="2 minutes"
          />

          <div id="make-it-better"></div>
          <MotionService
            avatarImg="/images/motion-better-avatar.png"
            backgroundImage="/images/make-it-better-header-bg.png"
            position="R"
            title="make it better"
            subtitle="motion therapy"
            services={services.better}
            text="In certain cases, Dr. Jones may diagnose that you require a bit more effort and additional hours of work to properly convey your message; this means that it's necessary to include some simple characters that allow us to develop a storytelling."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEUYE20PyO8yPjFhpGyny6n&si=Ej-7FtAE4FEJAIrw"
            price="2.700"
            duration="1 minute"
          />

          <div id="go-beyond"></div>
          <MotionService
            avatarImg="/images/motion-beyond-avatar.png"
            backgroundImage="/images/pricing-go-beyond-bg.png"
            position="L"
            title="go beyond"
            subtitle="motion therapy"
            services={services.better}
            text="If Dr. Jones has diagnosed a great need for you to connect with your audience, he surely recommended you to take this therapy. In that case, it's better to hurry… Let's Schedule the briefing meeting son because we have around 7-8 weeks of work ahead… We are confident that, in the end, your audience will be connected with your message, Brand, or product/service."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEHzIRCVzpkhbXVAn-V4hi2&si=AIEhQVEBj3G5FuKw"
            price="4.500"
            duration="1 minute"
          />

          <div id="zoom-infinite"></div>
          <MotionService
            avatarImg="/images/motion-zoom-infinito-avatar.png"
            backgroundImage="/images/pricing-infinity-zoom-bg.png"
            position="R"
            title="infinite"
            subtitle="zoom"
            services={services.zoom}
            text="Unleash your creativity with Infinite Zoom créate impactful MESSAGES with Infinite Zoom animation. We connect with your audience through unique visual impact and clear, versatile communication. Perfect for marketing, social media, and corporate presentations."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAH1wOdheFOgLlx0eMPBJxdg&si=xs8YloGJmcj3cfQ-"
            price="1.100"
            duration="1 minute"
          />

          <div id="avatar"></div>
          <MotionService
            avatarImg="/images/motion-avatares-avatar.png"
            backgroundImage="/images/pricing-avatar-bg.png"
            position="L"
            title="avatars"
            subtitle=""
            services={services.avatares}
            text="At Viernes Studio, we créate AI-powered custom avatars. Discover a SOLUTION that will transform your COMMUNICATION strategy. Our avatars deliver your message dynamically and clearly, ensuring lasting COMMUNICATION with your CLIENTS. Imagine an avatar that represents your brand's values and interacts EFFECTIVELY with both internal and external audiences."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEuJKE1UigecDDNPqRkw6K1&si=oN8aZl8qHSBdKcdq"
            duration="2 minutes"
            price="1.600"
          />
        </>
      )}

      {isMobile && (
        <>
          <MotionServiceMobile
            services={services.simple}
            title="keep it simple"
            subtitle="motion therapy"
            text="Dr. Jones Will prescribe it to you when he has diagnosed that you have a simple message to convey to a large audience, and you have a tight time or Budget for the Project.<br/><br/>
                We can assure you that this is the best option to connect with your audience."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEUYE20PyO8yPjFhpGyny6n&si=Ej-7FtAE4FEJAIrw"
            backgroundImage="/images/value-position-bg.png"
            backgroundColor="#26974a"
            duration="2 minutes"
            price="2.000"
          />
          <MotionServiceMobile
            backgroundImage="/images/team-bg.png"
            title="make it better"
            subtitle="motion therapy"
            services={services.better}
            text="In certain cases, Dr. Jones may diagnose that you require a bit more effort and additional hours of work to properly convey your message; this means that it's necessary to include some simple characters that allow us to develop a storytelling."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEUYE20PyO8yPjFhpGyny6n&si=Ej-7FtAE4FEJAIrw"
            backgroundColor="#225e48"
            duration="1 minute"
            price="2.700"
          />
          <MotionServiceMobile
            backgroundImage="/images/value-position-bg.png"
            title="go beyond"
            subtitle="motion therapy"
            services={services.better}
            text="If Dr. Jones has diagnosed a great need for you to connect with your audience, he surely recommended you to take this therapy. In that case, it's better to hurry… Let's Schedule the briefing meeting son because we have around 7-8 weeks of work ahead… We are confident that, in the end, your audience will be connected with your message, Brand, or product/service."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEHzIRCVzpkhbXVAn-V4hi2&si=AIEhQVEBj3G5FuKw"
            backgroundColor="#36a09d"
            duration="1 minute"
            price="4.500"
          />
          <MotionServiceMobile
            backgroundImage="/images/team-bg.png"
            title="infinite"
            subtitle="zoom"
            services={services.zoom}
            text="Unleash your creativity with Infinite Zoom créate impactful MESSAGES with Infinite Zoom animation. We connect with your audience through unique visual impact and clear, versatile communication. Perfect for marketing, social media, and corporate presentations."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAH1wOdheFOgLlx0eMPBJxdg&si=xs8YloGJmcj3cfQ-"
            backgroundColor="#ec8c29"
            duration="1 minute"
            price="1.100"
          />
          <MotionServiceMobile
            backgroundImage="/images/pricing-avatar-bg.png"
            title="avatars"
            subtitle=""
            services={services.avatares}
            text="At Viernes Studio, we créate AI-powered custom avatars. Discover a SOLUTION that will transform your COMMUNICATION strategy. Our avatars deliver your message dynamically and clearly, ensuring lasting COMMUNICATION with your CLIENTS. Imagine an avatar that represents your brand's values and interacts EFFECTIVELY with both internal and external audiences."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEuJKE1UigecDDNPqRkw6K1&si=oN8aZl8qHSBdKcdq"
            backgroundColor="#84878d"
            duration="2 minutes"
            price="1.600"
          />
        </>
      )}
    </>
  );
}
