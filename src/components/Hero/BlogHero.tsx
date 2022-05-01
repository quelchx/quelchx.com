import { motion } from "framer-motion";
import Animate from "../Animate";
import data from "../../constants";
import VoxelComputerLoader from "../VoxelComputerLoader";
import dynamic from "next/dynamic";


const LazyVoxelComputer = dynamic(() => import("../VoxelComputer"), {
  ssr: false,
  loading: () => <VoxelComputerLoader />,
});

const BlogHero = () => {
  const blogContainer = data.variants.blogContainer;
  const slideInLeft = data.variants.slideInLeft;
  const slideInRight = data.variants.slideInRight;

  return (
    <motion.section
      variants={blogContainer}
      initial="hidden"
      animate="visible"
      className="py-20"
    >
      <Animate animation="fade-up" delay={300} duration={500}>
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
                  className="mb-4 font-medium tracking-tight xl:mb-6"
                >
                  Check out some developer related articles I have wrote.
                </motion.p>
           
              </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <LazyVoxelComputer />
            </div>
          </div>
        </div>
      </Animate>
    </motion.section>
  );
};

export default BlogHero;
