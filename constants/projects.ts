import { ProjectProps } from "../interface";

const projects: ProjectProps[] = [
  {
    title: "Mdote",
    description:
      "Mdote is a Markdown based note taking application built into the browser. It's intended for students or anyone who quickly wants to take a simple but feature rich note and save it to their local device.",
    link: "http://mdote.netlify.app",
    features: [
      {
        heading: "Simplistic",
        text: "I designed Mdote to be something that I would actually use. It's simple, quick and to the point",
      },
      {
        heading: "Straightforward",
        text: "Mdote is inteded to be straight to the point without any bloat or unwanted features",
      },
      {
        heading: "Open Source",
        text: "Mdote is open source so anyone can contribute and possibly make it something bigger than what it currently is.",
      },
    ],
  },
  {
    title: "Vue Writer",
    description:
      "Vue 3 component that simulates typing, and erasing text. This package intention is to be a very lightweight typewriting feature you can add to your existing project! More will be added in time + extra customizations, and feautures.",
    link: "http://npmjs/package/vue-writer",
    features: [
      {
        heading: "Over 7000 Downloads",
        text: "When I designed this package it was for personal use, to me its crazy it's almost reached 10k downloads within a year",
      },
      {
        heading: "Lightweight",
        text: "This package is designed to be minimal and lightweight. It's inteded to give the user a access to a typewriter like function without all the extra hassle.",
      },
      {
        heading: "Clean",
        text: "Vue Writer is designed to be very simple and so you can quickly add it to any existing project or with a fresh project",
      },
    ],
  },
  {
    title: "AOS Vue",
    description:
      "Animate On Scroll for Vue 3 Projects, This package utilizes a library called aos.js, which you can find at https://www.npmjs.com/package/aos. The design of This component is to leverage the aos.js library and its features, but more customized towards the Vue way.",
    link: "http://npmjs/package/aos-vue",
    features: [
      {
        heading: "Over 3000 Downloads",
        text: "With 3000 downloads and climbing each day, check out what the buzz is about",
      },
      {
        heading: "Simple",
        text: "AOS Vue is designed to be simple but powerful. You can add it to any project quickly by wrapping within the it's container and add a ton of animations and effects",
      },
      {
        heading: "Feature Rich",
        text: "If your a fan of AOS then this package contains all the great Animate on Scroll features you can think of.",
      },
    ],
  },
  {
    title: "HFX CSS",
    description:
      "HFX CSS is designed to be minimal and straight forward. This project is currently on and off undergoing construction. It's designed to add hover effects without additional and unwanted CSS. Most of the effects are commonly used hover effects, and adding it to a project is simple and quick",
    link: "http://npmjs/package/hfx-css",
    features: [
      {
        heading: "Growing Each Day",
        text: "This mini utility library is still new and being added to",
      },
      {
        heading: "Quick",
        text: "Without all the additional CSS that most libraries and packages add this is only a few hundred lines of CSS and you most likely will be using 50-60% of the effects that are available",
      },
      {
        heading: "Simple",
        text: "Although very tiny, I try to design everything to be simplistic and to the point. So if any user wants to try it, they can with ease.",
      },
    ],
  },
];

export default projects;
