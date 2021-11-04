import React from "react";
import Assets from "@/components/Assets";
import AOS from "@/components/AOS";
import { assets } from "../interfaces/assets";

export default function Features() {
  const listAssets = assets.map((asset) => {
    return (
      <Assets
        key={asset.id}
        icon={asset.icon}
        asset={asset.name}
        details={asset.text}
      />
    );
  });

  return (
    <section className="py-20 bg-white">
      <AOS animation="zoom-in" delay="200" duration="300">
        <div className="container max-w-6xl px-4 mx-auto">
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
      </AOS>
    </section>
  );
}
