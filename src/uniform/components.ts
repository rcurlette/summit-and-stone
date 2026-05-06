import { registerUniformComponent } from "@uniformdev/canvas-react";
import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";

registerUniformComponent({
  type: "herosection",
  component: HeroSection,
});

registerUniformComponent({
  type: "contentBlock",
  component: ContentBlock,
});
