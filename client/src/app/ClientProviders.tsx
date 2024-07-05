// app/ClientProviders.tsx
"use client";

import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import StyledComponentsRegistry from "./lib/registry";
import Loading from "./loading";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClinet } from "@/global/reactQuery";

export default function ClientProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClinet}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </QueryClientProvider>
      <SpeedInsights />
      <Analytics />
    </Suspense>
  );
}
