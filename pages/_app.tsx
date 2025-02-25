import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/Header.css";
import "@/styles/Footer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
