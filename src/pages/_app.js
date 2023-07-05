import { Inter } from "next/font/google";
export default function App({ Component, pageProps }) {
  const inter = Inter({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
  });
  return (
    <>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
