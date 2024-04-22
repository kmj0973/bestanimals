import StyledComponentsRegistry from "./lib/registry";
import Header from "./_common/Header";
import Footer from "./_common/Footer";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "@/styles/globals.css";

const noto = Noto_Sans_KR({
  //google font
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Animals",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={noto.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
