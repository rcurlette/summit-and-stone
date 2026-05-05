import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "../components/NavBar";
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen bg-zinc-50 font-sans dark:bg-black`}
    >
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
