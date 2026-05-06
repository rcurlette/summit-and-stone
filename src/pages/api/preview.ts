import { createPreviewHandler } from "@uniformdev/canvas-next";

export interface PreviewProps {
  secret: string;
}

const handler = createPreviewHandler({
  secret: () => process.env.UNIFORM_PREVIEW_SECRET,
});

export default handler;
