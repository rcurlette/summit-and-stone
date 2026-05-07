import { registerUniformComponent } from "@uniformdev/canvas-react";
import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import LatestArticles from "@/components/LatestArticles";
import BlogArticleIntro from "@/components/BlogArticleIntro";

registerUniformComponent({
  type: "herosection",
  component: HeroSection,
});

registerUniformComponent({
  type: "contentBlock",
  component: ContentBlock,
});

registerUniformComponent({
  type: "latestArticles",
  component: LatestArticles,
});

registerUniformComponent({
  type: "blogarticleintro",
  component: BlogArticleIntro,
});
