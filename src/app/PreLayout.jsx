"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

export default function PreLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const controlsPercentage = useAnimation();
  const controlsLogo = useAnimation();
  const controlsBackground = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      setLoading(true);
      await controlsBackground.start({
        opacity: 0,
        scaleX: 0,
        x: "100vw",
        duration: 0,
      });
      await controlsLogo.start({ y: 1, scale: 0.7, opacity: 1, duration: 0.5 });
      await controlsPercentage.start({ y: 0, opacity: 1 });
      await animate(count, 100, { duration: 1.5 });
      await controlsPercentage.start({ y: 100, opacity: 0, duration: 0.5 });
      await controlsLogo.start({ y: 50, scale: 1, duration: 0.5 });
      await controlsBackground.start({
        opacity: 1,
        scaleX: 1,
        x: "0vw",
        duration: 3,
      });
      await controlsLogo.start({ opacity: 0, duration: 0.2 });
      setTimeout(() => {
        setLoading(false);
      }, 350);
    };

    sequence();
    return () => {
      controlsBackground.stop();
      controlsLogo.stop();
      controlsPercentage.stop();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const exitAnimation = {
    opacity: 1,
    scaleX: 0.1,
    x: "90vw",
    transition: { duration: 0.5 },
  };
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="background"
          exit={exitAnimation}
          className="absolute overflow-hidden flex items-center justify-center z-[7000] h-screen w-full bg-primary-navy"
        >
          <div className=" absolute h-96 z-40 flex flex-col items-center justify-center gap-4">
            <motion.img
              animate={controlsLogo}
              className=" h-16 opacity-0"
              src="./Logo.png"
            />
            <motion.div
              animate={controlsPercentage}
              className=" font-serif text-8xl font-bold  text-primary-red"
            >
              <motion.span>{rounded}</motion.span>
              <span>%</span>
            </motion.div>
          </div>

          <motion.div
            animate={controlsBackground}
            className=" absolute opacity-0 z-30 flex w-full h-full"
          >
            <motion.div className=" w-full h-full  bg-primary-navy" />
            <motion.div className=" w-full h-full   bg-primary-yellow" />
            <motion.div className=" w-full h-full   bg-primary-green" />
            <motion.div className=" w-full h-full   bg-primary-red" />
          </motion.div>
        </motion.div>
      ) : (
        <>{children}</>
      )}
    </AnimatePresence>
  );
}
