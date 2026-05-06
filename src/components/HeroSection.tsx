import React from "react";
import { UniformText } from "@uniformdev/canvas-react";

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export default function HeroSection({ component }: any) {
  return (
    <section className="min-h-[15vh] bg-gradient-to-br from-zinc-800 to-zinc-950 font-sans px-8">
      <div>
        <UniformText
          placeholder="title content goes here"
          parameterId="title"
          as="h1"
          className="text-5xl md:text-6xl font-bold text-white"
        />
        <br />
        <UniformText
          placeholder="subtitle content goes here"
          parameterId="subtitle"
          as="p"
          className="text-xl text-zinc-300 mt-4"
        />
      </div>
    </section>
  );
}
