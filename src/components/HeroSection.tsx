import React from "react";
import { UniformText } from "@uniformdev/canvas-react";
import { imageFrom } from "@uniformdev/assets";
import Image from "next/image";

export interface HeroSectionProps {
  imageUrl?: string;
}

export default function HeroSection({ component }: any) {
  const imageAssets = component.parameters?.image?.value ?? [];
  const [firstAsset] = imageAssets;
  const imageUrl = firstAsset
    ? imageFrom(firstAsset)
        .transform({
          width: 1200, // High resolution for featured images
          fit: "cover", // Smart crop to maintain aspect ratio
          focal: firstAsset.fields?.focalPoint?.value || "center", // Focal point support for precise positioning
        })
        .url()
    : undefined;

  return (
    <section className="relative font-sans">
      <div className="relative w-full" style={{ aspectRatio: "2/1" }}>
        <Image
          src={imageUrl}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-12 z-10">
          <UniformText
            placeholder="title content goes here"
            parameterId="title"
            as="h1"
            className="text-5xl md:text-6xl font-bold text-white"
          />
          <UniformText
            placeholder="subtitle content goes here"
            parameterId="subtitle"
            as="p"
            className="text-xl text-zinc-300 mt-4"
          />
        </div>
      </div>
    </section>
  );
}
