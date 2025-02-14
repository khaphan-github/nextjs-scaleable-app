"use client"
import { CustomThemeProvider } from "@/context/theme.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { Persister, PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

export default function AppRoot(props: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(new QueryClient());
  const [persister, setPersister] = useState<Persister | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPersister(
        createSyncStoragePersister({
          storage: window.sessionStorage,
          throttleTime: 10 * 1000,
        })                                 
      );
    }
  }, []);

  if (!persister) return (
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>
        {props.children}
      </CustomThemeProvider>
      {/* TODO: ONly oopen in developemtn mod */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <QueryClientProvider client={queryClient}>
        <CustomThemeProvider>
          {props.children}
        </CustomThemeProvider>
        {/* TODO: ONly oopen in developemtn mod */}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </PersistQueryClientProvider>
  )
}