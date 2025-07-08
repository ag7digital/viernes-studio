import Link from "next/link";
import { Button } from "./ui/button";
import { VideoPlayer } from "./video-embed";

export default function Hero() {
  return (
    <div className="bg-[url(/images/quienes-somos-bg.png)] bg-cover bg-no-repeat bg-center">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column - Video player with custom overlay */}
          <div>
            <VideoPlayer
              videoId="e9DTej0fy1Q"
              thumbnailUrl="/images/thumb-video-promotional.jpg"
              title="Viernes Studio - Promotional Video"
            />
          </div>

          {/* Right column - Content */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <span className="spicy text-white text-5xl md:text-6xl content-center">
                Do you know the classic <br />
              </span>
              <span className="moon text-white text-[1rem] md:text-2xl text-center mt-5 uppercase">
                "strategic communication disorder"?
              </span>
            </div>
            <div className="flex mt-8 items-center justify-center">
              <span className="moon text-2xl md:text-3xl font-medium tx-gray text-center">
                We’re not the only ones saying it
              </span>
            </div>
            <div className="flex items-center justify-center mt-4 p-4">
              <p className="montserrat text-xl md:text-2xl tx-gray m-4 text-center">
                <span className="font-bold">EFFECTIVELY</span> communicating
                with an audience to achieve
                <span className="font-bold"> GOALS</span> is a common concern
                across all industries today.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button className="moon tx-gray bg-white hover:bg-white/90 text-gray-800 text-3xl font-medium px-10 py-8 rounded-xl cursor-pointer ">
                  About us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className="mt-12 md:mt-20 text-center max-w-4xl mx-auto text-white">
          <p className="montserrat tx-gray text-xl md:text-2xl">
            Dr. Jones is an expert who consults with hundreds of professionals
            with the classic{" "}
            <span className="font-bold">
              &quot;Strategic Communication Disorder&quot;.
            </span>{" "}
            Learn how he helps them and why he trusts his therapies at
            <span className="font-bold"> VIERNES STUDIO</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
