"use client";

import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "react-query";
import { Home } from "../app/screens/home";
import { BaseTheme } from "../app/lib/styled-components/themes/BaseTheme";
import { useCustomQueryClient } from "@/app/lib";


export default function HomePage() {
  const { queryClient, isClientLoaded } = useCustomQueryClient()

  if (!isClientLoaded)
    return <div>Error loading query client for react hooks.</div>

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={BaseTheme}>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
