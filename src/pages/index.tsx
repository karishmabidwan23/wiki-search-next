"use client";

import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "../app/screens/home";
import { BaseTheme } from "../app/lib/styled-components/themes/BaseTheme";

const queryClient = new QueryClient();

export default function () {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={BaseTheme}>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
