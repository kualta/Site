import "styles/globals.css";

import { fredoka } from "styles/fonts";
import { IsChristmas, Snow } from "@/components/Effects";
import { CornersScope } from "@/components/CornersScope";
import type { Metadata } from "next";
import Head from "next/head";
import { Header } from "@/components/Header";
import { AboutButton, NotificationsButton } from "@/components/MetaButton";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://kualta.dev"),
  title: {
    default: "kualta",
    template: "%s",
  },
  description: "building with love",
  keywords: [
    "kualta",
    "kualts",
    "kualta.dev",
    "kualta.com",
    "kualta.art",
    "kualta gallery",
    "kualtadev",
    "kuollut",
    "ku",
    "kualta website",
    "kualta blog",
    "ai blog",
    "philosophy",
    "philosophy blog",
    "kualta philosophy",
    "kualta philosophy blog",
    "kualta philosophy website",
    "beauty in the mad world",
    "building with love",
    "glimpse into the void",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    images: "/opengraph-image.png",
    title: "kualta.dev",
    description: "building with love",
    creator: "@kualts",
  },
  category: "blog",
  openGraph: {
    images: "/opengraph-image.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script defer src="https://stats.pingpad.io/script.js" data-website-id="09665935-c691-42bc-b2ba-d02329c44f3e" />
      </head>
      <body
        className={`bg-bg dark:bg-dark-bg disable-scrollbars text-text transition-all
        ease-in-out delay-150 dark:text-dark-text place-items-center
        min-h-screen flex flex-col justify center relative ${fredoka.className}`}
      >
        <div className="noise" />

        <IsChristmas>
          <Snow />
        </IsChristmas>

        <Header />

        <div className="flex flex-col items-center grow w-full h-full">{children}</div>

        <NotificationsButton />
        <AboutButton />

        <div className="hidden sm:flex  border-text dark:border-dark-text">
          <CornersScope />
        </div>

        <Toaster
          toastOptions={{
            className: `p-3 min-w-0 rounded-lg bg-secondary dark:bg-dark-secondary drop-shadow-md
            transition duration-100 border-2 border-secondary dark:border-dark-secondary
            hover:dark:border-dark-primary hover:border-primary text-text dark:text-dark-text`,
          }}
        />
      </body>
    </html>
  );
}
