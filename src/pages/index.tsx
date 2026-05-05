import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HeroSection from "../components/HeroSection";
import { CanvasClient } from "@uniformdev/canvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function getServerSideProps() {
  console.log("start");
  // 1. create the client
  const client = new CanvasClient({
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiKey: process.env.UNIFORM_API_KEY,
  });

  // 2. fetch the composition
  const composition = await client.getCompositionBySlug({
    slug: "home",
  });

  //console.log(composition);
  //console.log(JSON.stringify(composition.composition.parameters, null, 2));
  //console.log(
  //  JSON.stringify(
  //    composition.composition.slots && composition.composition.slots.content,
  //    null,
  //    2,
  //  ),
  //);

  // 3. return { props: { something } }
  return {
    props: {
      composition: composition.composition,
    },
  };
}

export default function Home({ composition }: { composition: any }) {
  console.log(composition);
  const title = composition.slots.content[0].parameters.title.locales["en-US"];
  const subtitle =
    composition.slots.content[0].parameters.subtitle.locales["en-US"];

  console.log(title, subtitle);

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <HeroSection title={title} subtitle={subtitle} />
    </div>
  );
}
