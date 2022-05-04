import { motion } from "framer-motion";
import Variants from "../../constants/variants";
import ChakraComponent from "../chakra/provider";

const BlogHero = () => {
  const blogContainer = Variants.blogContainer;
  const slideInLeft = Variants.slideInLeft;
  const slideInRight = Variants.slideInRight;

  return (
    <motion.section
      variants={blogContainer}
      initial="hidden"
      animate="visible"
      className="py-20 "
    >
      <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div className="w-full lg:max-w-md">
              <motion.h2
                variants={slideInLeft}
                className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading"
              >
                A Developers Blog
              </motion.h2>
              <motion.p
                variants={slideInRight}
                className="mb-2 font-medium tracking-tight xl:mb-6"
              >
                Check out some developer related articles I have wrote.
              </motion.p>
            </div>
          </div>
          <div className="w-full px-3 mb-2 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
            <ChakraComponent />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogHero;
