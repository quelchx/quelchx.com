const VARIANTS = {
  slideInLeft: {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 1.2,
        mass: 0.5,
      },
    },
  },
  slideInRight: {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 1,
        mass: 0.5,
      },
    },
  },
  blogContainer: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        damping: 9, // this improves how fast next animation comes in
        staggerChildren: 0.4, // gap between animations
      },
    },
  },
  svgVariant: {
    hover: {
      color: "#01aa22",
      transition: {
        duration: 0.3,
      },
    },
  },
  hoverVariant: {
    hover: {
      scale: 1.01,
      originX: 0,
      transition: {
        type: "spring",
        stiffness: 320,
        duration: 0.5,
        delay: 0.3,
      },
    },
  },
  containerVariants: {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
        when: "afterChildren",
        mass: 0.4,
      },
    },
  },
};

export default VARIANTS;
