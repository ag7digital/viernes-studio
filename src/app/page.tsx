"use client";
import Image from "next/image";
import Hero from "./components/hero";
import Trust from "./components/trust";
import { CurvedTestimonials } from "./components/curved-testimonials";
import ServicesHome from "./components/services";
import MotionDesignPower from "./components/motion-design-power";
import { Button } from "./components/ui/button";
import Portfolio from "./components/portfolio";
import { useIsMobile } from "./hooks/mobile";
import PricingHome from "./components/pricing-home";
import PricingHomeMobile from "./components/pricing-home-mobile";
import { Download, DownloadIcon } from "lucide-react";

export default function Home() {
  const isMobile = useIsMobile();

  const testimonials = [
    {
      id: 1,
      name: "Sebastían Rosas",
      role: "Head of Communications",
      avatar: "/images/logo-sidoc.svg",
      content:
        "I’ve known the work of Viernes Studio for over 6 years, and what sets them apart is their dedication, passion, and the unique identity they bring to every project. Viernes gets creatively involved and accompanies the entire creative process to ensure a standout product that truly reflects the heart of each organization. That’s their real strength, not just delivering high-quality generic products, but audiovisual pieces with soul.",
    },
    {
      id: 2,
      name: "Catalina Guerrero",
      role: "Head Marketing and Communications-LATAM",
      avatar: "/images/logo-sika.svg",
      content:
        "I’ve been working with Viernes for almost 6 years as my go-to provider for videos and audiovisual solutions for my regional projects, always remotely. I started with them when they were a small team, and I’ve watched them grow over the years. I recommend them 100%, I fully trust their work, and I care about them a lot! They’re a creative, resourceful, and genuinely kind team, committed to meeting the client's needs, even when that requires extra effort. They are flexible, never say 'no' to their clients, and their rates are very competitive. They're constantly striving to improve and innovate to stay on top of the latest audiovisual trends. In short, working with Viernes feels like having your own in-house production team.",
    },
    {
      id: 3,
      name: "Haydée Jiménez",
      role: "Digital Marketing NORLA",
      avatar: "/images/logo-bayer.svg",
      content:
        "Working with Viernes Studio was a very rewarding experience. Their professionalism and agility enabled us to achieve our goal in record time.",
    },
    {
      id: 4,
      name: "Nidia Clavijo",
      role: "Brand Manager",
      avatar: "/images/logo-yara.svg",
      content:
        "When I think of Viernes, I think of the effectiveness of their communication strategies, enriched by the fresh ideas and experience of this team. But beyond all of this, there's the pleasure of working with a kind, respectful, and dedicated team, always willing to bring every idea to life.",
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/portfolio/Portafolio-Latam.pdf";
    link.download = "Portafolio-Latam.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {!isMobile && (
        <div className="">
          <video preload="auto" autoPlay loop muted>
            <source
              src="/videos/Viernes_Motion_Reel_2023_Viernes_Studio_v1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
      <Hero />
      <Trust />
      <CurvedTestimonials
        testimonials={testimonials}
        autoRotate={true}
        rotationInterval={5000}
      />
      <ServicesHome />
      <MotionDesignPower />
      {/* {isMobile ? <PricingHomeMobile /> : <PricingHome />} */}
      <div className="flex items-center justify-center my-10 ">
        <Button
          className="cardenio text-white text-5xl py-8 bg-emerald-800 w-[300px] hover:bg-emerald-800"
          onClick={handleDownload}
        >
          <Download size={64} className="mr-2 h-4 w-4" />
          portfolio
        </Button>
      </div>
      <Portfolio />
    </>
  );
}
