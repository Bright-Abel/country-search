"use client";

import client from "@/lib/apolloconfig";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";
// import { GlobalStyle } from "@/styles/global";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ApolloProvider client={client}>
        {/* <GlobalStyle /> */}
        {children}
      </ApolloProvider>
    </ThemeProvider>
  );
}
