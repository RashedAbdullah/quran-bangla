import "./scroll.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#043333", "#043939"]
  );

  return (
    <div className="box">
      <motion.div
        style={{ transformOrigin: "left", scaleX, backgroundColor }}
        className="h-1 fixed bottom-1 left-0 w-full z-50"
      />
    </div>
  );
};

export default ScrollAnimation;
