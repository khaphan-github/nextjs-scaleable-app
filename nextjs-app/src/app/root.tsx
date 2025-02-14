"use client"
import { CustomThemeProvider } from "@/context/theme.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function AppRoot(props: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>

      <CustomThemeProvider>
        {props.children}
      </CustomThemeProvider>
      {/* TODO: ONly oopen in developemtn mod */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}