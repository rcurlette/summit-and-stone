import React from "react";

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

export default function HeroSection({ hero }: any) {
  const title = getParamValue(hero, "title", "en-US");
  const subtitle = getParamValue(hero, "subtitle", "en-US");

  return (
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <br />
      {subtitle && <p className="text-xl"> {subtitle} </p>}
    </div>
  );
}
