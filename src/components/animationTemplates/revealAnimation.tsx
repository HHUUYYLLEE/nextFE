"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
interface Props {
  children: React.ReactElement;
  duration: number;
  delay: number;
}
export const RevealAnimationLeftToRight = ({
  children,
  duration,
  delay,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) mainControls.start("visible");
    else mainControls.set("hidden");
  }, [isInView, mainControls]);
  return (
    <div ref={ref} className="relative overflow-hidden flex justify-between">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -300 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const RevealAnimationRightToLeft = ({
  children,
  duration,
  delay,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) mainControls.start("visible");
    else mainControls.set("hidden");
  }, [isInView, mainControls]);
  return (
    <div ref={ref} className="relative overflow-hidden flex justify-between">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 300 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealAnimationTopToBottom = ({
  children,
  duration,
  delay,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) mainControls.start("visible");
    else mainControls.set("hidden");
  }, [isInView, mainControls]);
  return (
    <div ref={ref} className="w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const RevealAnimationBottomToTop = ({
  children,
  duration,
  delay,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) mainControls.start("visible");
    else mainControls.set("hidden");
  }, [isInView, mainControls]);
  return (
    <div ref={ref} className="w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
