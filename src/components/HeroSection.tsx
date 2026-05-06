import React from "react";
import { UniformText } from "@uniformdev/canvas-react";

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

function getParamValue(
  component: any,
  paramName: string,
  locale: string,
): string {
  return component.parameters?.[paramName]?.locales?.[locale] ?? "";
}

export default function HeroSection({ component }: any) {
  const title = getParamValue(component, "title", "en-US");
  const subtitle = getParamValue(component, "subtitle", "en-US");
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
