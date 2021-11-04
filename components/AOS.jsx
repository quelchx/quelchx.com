import React from "react";

export default function AOS({
  children,
  animation,
  easing,
  mirror,
  duration,
  once,
  delay,
  anchor,
}) {
  AOS.defaultProps = {
    animation: "fade-in",
    easing: "ease-in-out",
    mirror: true,
    once: false,
    delay: "0",
    anchor: "",
    duration: "0",
  };

  return (
    <div
      data-aos={animation}
      data-aos-easing={easing}
      data-aos-mirror={mirror}
      data-aos-duration={duration}
      data-aos-once={once}
      data-aos-delay={delay}
      data-aos-anchor-placement={anchor}
    >
      {children}
    </div>
  );
}
