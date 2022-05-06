interface AnimationProps {
  children: React.ReactNode;
  animation?: string;
  duration?: string | number;
  delay?: string | number;
}

const Animate = ({
  children,
  animation,
  duration = 0,
  delay = 0,
}: AnimationProps) => {
  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
};

export default Animate;
