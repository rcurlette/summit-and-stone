import { BlogArticle } from "../types/uniform";
import Link from "next/link";
import { UniformSlot } from "@uniformdev/canvas-react";

interface LatestBlogArticleProps {
  articles: BlogArticle[];
  viewAllHref?: string;
}

export default function LatestArticles({
  articles,
  viewAllHref = "#",
}: LatestBlogArticleProps) {
  return (
    <section className="bg-background py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
          Latest News and Views
        </h2>
        <div className="border-t border-gray-200 mb-8" />
        <div className="divide-y divide-gray-200">
          <UniformSlot name="articles" />
        </div>
        <div className="mt-12 text-center">
          <Link
            href={viewAllHref}
            className="inline-block px-16 py-4 bg-icsc-blue hover:bg-blue-700 text-white font-medium transition-colors"
          >
            See all News & Views
          </Link>
        </div>
      </div>
    </section>
  );
}
