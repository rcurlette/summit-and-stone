import React from "react";

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <br />
      {subtitle && <p className="text-xl"> {subtitle} </p>}
    </div>
  );
}
