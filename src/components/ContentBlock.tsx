import React from "react";
import { UniformText, UniformRichText } from "@uniformdev/canvas-react";
import { prose } from "@tailwindcss/typography";

export interface ContentBlocProps {
  title: string;
  subtitle?: string;
}

export default function ContentBlock({ component }: any) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 text-3xl font-bold mb-4">
      <div className="prose">
        <br />
        <br />
        <UniformText
          placeholder="heading content goes here"
          parameterId="heading"
          as="h1"
          className="text-4xl font-bold"
        />
        <br />
        <UniformRichText
          placeholder="Rich text content goes here"
          parameterId="content"
        />
      </div>
    </section>
  );
}
