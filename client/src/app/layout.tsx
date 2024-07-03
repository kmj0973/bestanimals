"use client";

import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import StyledComponentsRegistry from "./lib/registry";
import Providers from "./Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "@/styles/globals.css";
import Loading from "./loading";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Suspense fallback={<Loading />}>
          <Providers>
            <StyledComponentsRegistry>
              <ThemeProvider theme={theme}>
                <Header />
                {children}
                <Footer />
              </ThemeProvider>
            </StyledComponentsRegistry>
          </Providers>
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
