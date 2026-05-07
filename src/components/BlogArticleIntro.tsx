import React from "react";
import { BlogArticle } from "../types/uniform";
import { GetImageUrl } from "../lib/utils";

export default function BlogArticleIntro({
  title,
  summary,
  image,
  link,
}: BlogArticle) {
  const linkPath = link?.path || "#";
  const imageUrl = GetImageUrl(image);

  return (
    <a
      href={`${linkPath}`}
      className="group rounded-lg border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {imageUrl && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
        <p className="text-sm text-zinc-600 line-clamp-3">{summary}</p>
      </div>
    </a>
  );
}
