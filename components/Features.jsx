import React from "react";
import Assets from "@/components/Assets";
import { assets } from "../interfaces/assets";

export default function Features() {
  const listAssets = assets.map((asset) => {
    return (
      <Assets
        key={asset.name}
        icon={asset.icon}
        asset={asset.name}
        details={asset.text}
      />
    );
  });

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-gray-600 text-center">
          Experienced With
        </h2>
        <p className="mt-2 text-lg text-center text-gray-700">
          Personal skills I have aquired and technologies I'm familiar with
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          {listAssets}
        </div>
      </div>
    </section>
  );
}
