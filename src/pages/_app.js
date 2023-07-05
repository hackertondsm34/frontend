import { Inter } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme/theme";
import { GlobalStyle } from "@/theme/global";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Header } from "@/components/header";
import { ContextProvider } from "@/hooks/provider";
import { Section } from "@/components/section";
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  const [client] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider {...{ client }}>
        <ContextProvider>
          <ThemeProvider {...{ theme }}>
            <main className={inter.className}>
              <GlobalStyle />
              <Header />
              <Section />
              <Component {...pageProps} />
            </main>
          </ThemeProvider>
        </ContextProvider>
      </QueryClientProvider>
    </>
  );
}
