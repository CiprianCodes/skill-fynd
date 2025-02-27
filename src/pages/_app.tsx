import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SmoothScroll from "@/utils/SmoothScroll";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // This useEffect ensures that client-side code runs only in the browser
  useEffect(() => {
    // Add any client-side initialization here
    // For example, analytics initialization, etc.
  }, []);

  return (
    <SmoothScroll>
      <Component {...pageProps} />
    </SmoothScroll>
  );
}
