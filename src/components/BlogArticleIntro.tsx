import React from "react";
import { BlogArticle } from "../types/uniform";

export default function BlogArticleIntro({ title, summary }: BlogArticle) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 mt-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <h3 className="text-2xl font-bold text-zinc-900">{title}</h3>
      <span className="text-base text-zinc-600 mt-2 block">{summary}</span>
    </div>
  );
}
