import { QueryClient } from "@tanstack/react-query";

export const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

export const queryKeys = {
  adoption: "adoption",
};
