"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: { staleTime: 5 * 1000, refetchOnWindowFocus: false },
      },
    })
  );
  return (
    <QueryClientProvider client={client}>
      <Toaster />
      <SessionProvider>{children}</SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default Providers;
