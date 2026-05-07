import React from "react";
import { BlogArticle } from "../types/uniform";
import { formatDate } from "../lib/utils";
import { RichTextRendererComponent } from "@uniformdev/canvas-react";
import { UniformRichText } from "@uniformdev/canvas-next";
import { imageFrom } from "@uniformdev/assets";
import Image from "next/image";
import { GetImageUrl } from "../lib/utils";

export default function BlogArticleDetail({
  title,
  summary,
  content,
  date,
  image,
}: BlogArticle) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-zinc-600 mb-8">{summary}</p>
      {image && <Image src={image} alt={title} width={800} height={400} />}
      <p className="text-zinc-500 mb-2">{formatDate(date)}</p>
      <div className="prose prose-lg">
        <UniformRichText
          parameterId="content"
          placeholder="Rich Text goes here"
        />
      </div>
    </article>
  );
}
