import { Inter } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme/theme";
import { GlobalStyle } from "@/theme/global";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  const [client] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider {...{ client }}>
        <ThemeProvider {...{ theme }}>
          <main className={inter.className}>
            <GlobalStyle />
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
