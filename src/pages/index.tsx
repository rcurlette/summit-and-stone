import Image from "next/image";
import HeroSection from "../components/HeroSection";
import { CanvasClient } from "@uniformdev/canvas";

export async function getServerSideProps(context: any) {
  // 1. create the client
  const client = new CanvasClient({
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiKey: process.env.UNIFORM_API_KEY,
  });

  const slug = Array.isArray(context.query.slug)
    ? context.query.slug[0]
    : context.query.slug || "home";
  console.log("slug=" + slug);

  // 2. fetch the composition
  const composition = await client.getCompositionBySlug({
    slug: slug || "home",
  });

  // 3. return { props: { something } }
  return {
    props: {
      composition: composition.composition,
    },
  };
}

export default function Home({ composition }: { composition: any }) {
  console.log(composition);
  const hero = composition.slots.content[0];

  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <HeroSection hero={hero} />
    </div>
  );
}
