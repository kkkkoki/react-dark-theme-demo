import { css } from "@emotion/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React, { useState } from "react";

interface ThemeToggleButtonProps {
  toggle?: () => void;
  isDark: boolean;
}

const MotionAnimationButton: React.FC<ThemeToggleButtonProps> = ({
  toggle,
  isDark,
}) => {
  const [dark, setDark] = useState(isDark);

  const classes = {
    icon: css({
      width: "100%",
      height: "100%",
      filter: "drop-shadow(0 0 2px rgba(0, 0, 0, .5))",
    }),

    sun: css({
      color: "orange",
    }),

    moon: css({
      color: "skyblue",
    }),
  };

  const handle = () => {
    setDark(!dark);
    localStorage.setItem("theme", dark ? "ligth" : "dark");
  };

  const animationVariants: Variants = {
    initial: { scale: 0 },
    animate: { rotate: "360deg", scale: 1, transition: { duration: 0.5 } },
    exit: { rotate: "720deg", scale: 0, transition: { duration: 0.5 } },
  };

  return (
    <button onClick={() => handle()}>
      <AnimatePresence mode="wait">
        {dark ? (
          <motion.div
            key="sun"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animationVariants}>
            <MoonIcon css={[classes.icon, classes.moon]} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animationVariants}>
            <SunIcon css={[classes.icon, classes.sun]} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default MotionAnimationButton;
