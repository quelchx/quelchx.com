import { RoughNotationGroup } from "react-rough-notation";
import ColorHighlight from "./ColorHighlight";
import AnimateOnScroll from "./AnimateOnScroll";
import data from "@/constants/data";
import randomize from "../utils/random";

export default function Heading({ title }) {
  return (
    <RoughNotationGroup show={true}>
      <ColorHighlight
        animationDuration={3}
        color={data.colors[randomize(data.colors.length - 1)]}
      >
        <AnimateOnScroll animation="fade-right" delay="300">
          <h1 className="text-4xl md:text-8xl font-bold text-gray-100 dark:text-white my-2">
            {title}
          </h1>
        </AnimateOnScroll>
      </ColorHighlight>
    </RoughNotationGroup>
  );
}
