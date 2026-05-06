import React from "react";
import { UniformText } from "@uniformdev/canvas-react";

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export default function HeroSection({ component }: any) {
  return (
    <div>
      <UniformText
        placeholder="title content goes here"
        parameterId="title"
        as="h1"
        className="text-4xl font-bold"
      />
      <br />
      <UniformText
        placeholder="subtitle content goes here"
        parameterId="subtitle"
        as="p"
        className="text-xl"
      />
    </div>
  );
}
