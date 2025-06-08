import type { Metadata } from "next";
import "./globals.css";
import Providers from "./lib/Providers";
import Header from "./Components/Header";
import { Mulish } from "next/font/google";
import { Toaster } from "react-hot-toast";

const mulish = Mulish({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "This is Sachin Kumar Dagar Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${mulish.className} text-gray-950 relative sm:pt-40 antialiased`}
        style={{ backgroundColor: "#EEEDEB" }}
      >
        <div className="bg-transparent absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-transparent absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Providers>
          <Header />
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
