import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import "styles/globals.css";

export const metadata = {
  title: "kualta",
  description: "kualta's website",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head />

      <body className="dark:bg-dark-bg bg-lit-bg text-lit-text p-2 md:p-10 py-auto dark:text-dark-text h-screen w-screen ">
        <div className="absolute top-0 left-0">
          <BackButton />
        </div>
        {children}
        <div className="absolute top-0 right-0">
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
