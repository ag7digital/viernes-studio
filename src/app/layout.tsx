import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { GoogleTagManager } from "@next/third-parties/google";
import WhatsAppFloatingButton from "./components/whatsapp-floating-button";

const cardenio = localFont({
  src: [
    {
      path: "./fonts/CardenioModern-Bold.otf",
      weight: "800",
      style: "bold",
    },
    {
      path: "./fonts/CardenioModern-Regular.otf",
      weight: "500",
      style: "regular",
    },
  ],
  variable: "--font-cardenio",
});

const moonGetHeavy = localFont({
  src: "./fonts/moon_get-Heavy.otf",
  variable: "--font-moon",
});

const playfullist = localFont({
  src: "./fonts/Playfulist.otf",
  variable: "--font-playfulist",
});

const spicyChicken = localFont({
  src: "./fonts/Spicy_Chicken.otf",
  variable: "--font-spicy",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Viernes Studio",
  description:
    "Corporate Videos | Audiovisual production, institutional videos, business videos, marketing, multimedia, interactivity",
  metadataBase: new URL("https://viernes-studio.com"),
  openGraph: {
    title: "Viernes Studio",
    description:
      "Audiovisual production for companies in Latin America. Corporate, institutional and commercial videos with strategic focus.",
    url: "https://viernes-studio.com",
    siteName: "Viernes Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/Logo-Viernes.png",
        width: 1230,
        height: 1230,
        alt: "Viernes Studio Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WG84FLWX" />
      <body
        className={`${cardenio.variable} ${montserrat.variable} ${playfullist.variable} ${spicyChicken.variable} ${moonGetHeavy.variable}`}
      >
        <Header />

        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
