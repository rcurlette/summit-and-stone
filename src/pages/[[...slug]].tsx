import HeroSection from "../components/HeroSection";
import { CanvasClient } from "@uniformdev/canvas";
import { RouteClient } from "@uniformdev/canvas";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";
import { CANVAS_DRAFT_STATE, CANVAS_PUBLISHED_STATE } from "@uniformdev/canvas";

export async function getServerSideProps(context: any) {
  // 1. create the client
  /*
  const client = new CanvasClient({
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiKey: process.env.UNIFORM_API_KEY,
  });
*/
  const client = new RouteClient({
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiKey: process.env.UNIFORM_API_KEY,
  });

  const slug = Array.isArray(context.query.slug)
    ? context.query.slug[0]
    : context.query.slug || "home";

  // 2. fetch the composition
  const compositionFromRoute = (await client.getRoute({
    path: slug,
    state: context.preview ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE,
    locale: "en-US",
  })) as any;

  //console.log(JSON.stringify(composition.composition.parameters, null, 2));

  console.log(JSON.stringify(compositionFromRoute, null, 2));
  // 3. return { props: { something } }
  return {
    props: {
      composition: compositionFromRoute.compositionApiResponse.composition,
    },
  };
}

export default function Home({ composition }: { composition: any }) {
  return (
    <UniformComposition data={composition}>
      <div className={`min-h-screen bg-zinc-50 dark:bg-black`}>
        <UniformSlot name="content" />
      </div>
    </UniformComposition>
  );
}
