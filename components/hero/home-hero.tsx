import React from "react";
import Link from "next/link";

const HomeHero = () => {
  const avatarURL = "https://avatars.githubusercontent.com/u/74473426?v=4";

  return (
    <>
      <section className="relative py-20 overflow-hidden 2xl:py-40">
        <div className="container px-3 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex sm:flex-row pb-4 lg:pb-2 lg:flex-col w-[100%] justify-center items-center gap-2">
              <img
                className="inline-block w-16 h-16 rounded-full ring-2 ring-white"
                src={avatarURL}
                alt="avatar"
              />
              <h2 className="text-5xl font-bold lg:text-6xl font-heading">
                Eric Quelch
              </h2>
            </div>

            <div className="max-w-md mx-auto md:mt-2">
              <p className="text-lg dark:text-gray-200">
                Software Developer
              </p>
              <div className="mt-4">
              <a className="button-main" href="#">
                Developers Blog
              </a>
              <a className="button-hollow" href="#">
                Projects
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-2">
        <div className="container px-8 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-5 lg:w-1/2 lg:mb-0">
              <h3 className="mb-2 text-3xl font-bold tracking-tighter md:text-4xl text-coolGray-900">
                Welcome to my Digital Paradise
              </h3>
              <p className="content">
                <span className="hvr-buzz-out">👋</span> Hello everyone!
              </p>
              <p className="content">
                If it's not obvious by now, my name is Eric Quelch. Im a
                software developer who is currently living in London, Ontario
                Canada. I'm a born and raised Canadian boy, and yes I absolutely
                love Hockey if you haven't made that assumption yet. Big Toronto
                Maple Leafs fan... go Leafs go!
              </p>
              <p className="content">
                I'm a huge geek. I guess I'm not your sterotypical geek, I tend
                to suprise people at times with random facts about this and
                that.
              </p>
              <p className="content">
                I absolutely love tinkering with things on my computer to my
                cars. Saying that, I think that's what made me want to pursue a
                career as a developer.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <p className="font-semibold content md:text-xl">The Grind</p>
              <p className="content">
                Over the past four years I have been pursing an education
                perfecting my craft. I have earned a diploma in Internet
                Applications and Web Development and contunie to learn new
                things each day. One of my biggest problems is I have trouble
                putting my computer down to stop working on something. Ask my
                wife she gets a kick out of it 🤣
              </p>
              <p className="content">
                I could cover a lot about myself but I'll leave it to you to get
                to know more about me! Feel free to drop a message on my{" "}
                <Link href="/contact">contact page</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
