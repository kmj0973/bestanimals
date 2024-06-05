"use client";

import { queryClinet } from "@/global/reactQuery";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>
  );
};
