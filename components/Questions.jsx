import React from "react";
import { stack } from "../interfaces/stack";
import AOS from "@/components/AOS";

export default function Questions() {
  const listLibraries = stack.libraries.map((library) => {
    return (
      <AOS animation='fade-right' delay='400'>
        <li className="mx-6">{library}</li>
      </AOS>
    );
  });

  const listFiles = stack.files.map((file) => {
    return (
      <AOS animation='fade-left'>
        <li className="mx-6">{file}</li>
      </AOS>
      );
  });

  const listAssets = stack.assets.map((asset) => {
    return (
      <AOS animation='fade-right'>
        <li className="mx-6">{asset}</li>
      </AOS>
      )
  });

  return (
    <section className="py-24 bg-white">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <h2 className="mb-4 text-xl font-bold md:text-3xl">Questions</h2>
        <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-10">
          <AOS animation="fade-down">
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              Made With
            </h5>
            <ul className="list-disc">{listLibraries}</ul>
          </AOS>
          <AOS animatiom="fade-up">
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">Files</h5>
            <ul className="list-disc">{listFiles}</ul>
          </AOS>
          <AOS animatiom="fade-down">
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">Files</h5>
            <ul className="list-disc">{listAssets}</ul>
          </AOS>
        </div>
      </div>
    </section>
  );
}
