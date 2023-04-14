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
  const [isInit, setIsInit] = useState(true);

  const classes = {
    button: css({
      width: 80,
      height: 80,
      background: "#242424",
      border: "none",
    }),

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
    if (isInit) {
      setIsInit(false);
    }

    setDark(!dark);
    localStorage.setItem("theme", dark ? "ligth" : "dark");
  };

  const animationVariants: Variants = {
    initial: { scale: isInit ? 1 : 0 },

    animate: {
      rotate: `${dark ? "360deg" : "-360deg"}`,
      scale: 1,
      transition: { duration: 0.5 },
    },

    exit: {
      rotate: 0,
      scale: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {dark ? (
        <motion.button
          css={classes.button}
          onClick={() => handle()}
          key="sun"
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ rotate: isInit ? "360deg" : 0 }}
          variants={animationVariants}>
          <MoonIcon css={[classes.icon, classes.moon]} />
        </motion.button>
      ) : (
        <motion.button
          css={classes.button}
          onClick={() => handle()}
          key="moon"
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ rotate: isInit ? "-360deg" : 0 }}
          variants={animationVariants}>
          <SunIcon css={[classes.icon, classes.sun]} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default MotionAnimationButton;
