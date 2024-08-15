"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
interface Props {
  children: JSX.Element;
  duration: number;
  delay: number;
}
export function RevealAnimationLeftToRight({
  children,
  duration,
  delay,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
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
}
export function RevealAnimationRightToLeft({
  children,
  duration,
  delay,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
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
}

export function RevealAnimationTopToBottom({
  children,
  duration,
  delay,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
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
}
export function RevealAnimationBottomToTop({
  children,
  duration,
  delay,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
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
}
