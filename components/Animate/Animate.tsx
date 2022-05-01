import React from "react";
import { AnimationProps } from "../../interface";

const Animate: React.FC<AnimationProps> = ({
  children,
  animation,
  duration,
  delay,
  ...others
}) => {
  Animate.defaultProps = {
    animation: "fade-in",
    delay: "0",
    duration: "0",
  };

  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
      {...others}
    >
      {children}
    </div>
  );
};

export default Animate;
