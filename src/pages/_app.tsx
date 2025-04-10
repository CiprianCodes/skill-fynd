import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SmoothScroll from "@/utils/SmoothScroll";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <SmoothScroll>
      <Component {...pageProps} />
    </SmoothScroll>
  );
}
