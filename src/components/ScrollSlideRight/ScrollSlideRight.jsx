// components/ScrollSlideRight/ScrollSlideRight.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollSlideRight = ({ children, delay = 0, duration = 0.8, x = 50 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

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
        hidden: { opacity: 0, x },
        visible: { opacity: 1, x: 0, y:0 },
      }}
      viewport={{ once: true, amount: 0.3 }} // 👈 key line
    >
      {children}
    </motion.div>
  );
};

export default ScrollSlideRight;
