import { QueryClient } from "@tanstack/react-query";

export const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 6000 * 6000,
    },
  },
});

export const queryKeys = {
  adoption: "adoption",
};
