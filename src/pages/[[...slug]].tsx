import HeroSection from "../components/HeroSection";
import { CanvasClient } from "@uniformdev/canvas";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";

export async function getServerSideProps(context: any) {
  // 1. create the client
  const client = new CanvasClient({
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiKey: process.env.UNIFORM_API_KEY,
  });

  const slug = Array.isArray(context.query.slug)
    ? context.query.slug[0]
    : context.query.slug || "home";

  // 2. fetch the composition
  const composition = await client.getCompositionBySlug({
    slug: slug,
  });

  // 3. return { props: { something } }
  return {
    props: {
      composition: composition.composition,
    },
  };
}

export default function Home({ composition }: { composition: any }) {
  return (
    <UniformComposition data={composition}>
      <div
        className={`flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
      >
        <UniformSlot name="content" />
      </div>
    </UniformComposition>
  );
}
