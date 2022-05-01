import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import routes from "./routes";

const variants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      stiffness: 120,
      mass: 0.4,
    },
  },
};

const Links = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      {routes.map((route, idx) => {
        return (
          <Link href={route.path} key={idx}>
            <motion.a
              variants={variants}
              initial="hidden"
              animate="visible"
              className="text-base font-normal cursor-pointer hvr-buzz-out "
            >
              {router.asPath === route.path && (
                <React.Fragment>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="inline-block w-3 h-3 mb-0.5 mr-1 bi bi-display"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                  </svg>
                </React.Fragment>
              )}
              {route.name}
            </motion.a>
          </Link>
        );
      })}
    
   
    </React.Fragment>
  );
};

export default Links;