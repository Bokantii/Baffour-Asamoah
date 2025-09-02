// components/ScrollFadeIn/ScrollFadeIn.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollFadeIn = ({ children, delay = 0, duration = 0.8, y = 30,centered }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
 const childrenAlignment = centered ? "center" : ""
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
      style={{textAlign:childrenAlignment}}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
