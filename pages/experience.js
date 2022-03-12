import React from "react";
import Link from "next/link";
import ContainerBlock from "@/components/Layout/ContainerBlock";
import Asset from "@/components/Asset";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import assets from "@/constants/assets";
import guid from "@/utils/uuid";
import data from "@/constants/data";

export default function ExperiencePage() {
  const listAssets = assets.map((asset) => {
    return (
      <Asset
        key={guid()}
        icon={asset.icon}
        asset={asset.name}
        details={asset.text}
      />
    );
  });

  return (
    <ContainerBlock
      title="Eric Quelch - My Experience"
      description="Eric Quelch's developing experience and skills"
    >
      <section className="py-4 leading-7 dark:text-white dark:bg-gray-900 text-gray-900 bg-white sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl px-6 mx-auto border-solid lg:px-12">
          <div className="flex flex-col items-start leading-7 dark:text-white text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
            <div className="box-border flex-1 text-center border-solid sm:text-left">
              <div className="pl-4">
                <h1 className="text-4xl md:text-8xl flex font-bold text-gray-100 dark:text-white my-2">
                  <span
                    style={{
                      backgroundColor:
                        data.colors[
                          Math.floor(Math.random() * data.colors.length)
                        ],
                    }}
                  >
                    <p className="font-monaco pt-2">Experience</p>
                  </span>
                </h1>
              </div>
              <p className="mt-2 text-xl text-left dark:text-gray-300 text-gray-900 border-0 border-gray-200 sm:text-2xl">
                Looking for a developer? My services will help you maximize and
                boost your productivity. I know im no Linus Torvalds, Dennis
                Ritchie, Brendan Eich or Bill Gates, but I will bring
                motivation, passion and work hard. I may not be able to change
                the world but I can want to start somewhere.
              </p>
            </div>
            <Link href="/contact">
              <a className="hvr-bounce-to-top inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-blue-600 border border-blue-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 focus-within:bg-green-700 focus-within:border-green-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
                Contact Me
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-10 dark:bg-gray-900 bg-white">
        <AnimateOnScroll animation="zoom-in" delay="200" duration="300">
          <div className="container max-w-6xl px-4 mx-auto">
            <h2 className="text-4xl font-bold tracking-tight dark:text-cyan-500 text-gray-600 text-center">
              Experienced With
            </h2>
            <p className="mt-2 text-lg text-center dark:text-white text-gray-700">
              Personal skills I have aquired and technologies I'm familiar with
            </p>
            <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
              {listAssets}
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </ContainerBlock>
  );
}
