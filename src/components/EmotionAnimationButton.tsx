import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { css, useTheme } from "@emotion/react";

const EmotionAnimationButton = () => {
  const theme = useTheme();
  const { mode }: any = { ...theme };
  const isDark = mode === "dark";
  const [checked, setChecked] = useState(isDark);

  const classes = {
    label: css({
      position: "fixed",
      top: 0,
      right: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: "50%",
      cursor: "pointer",
    }),

    checkBox: css({
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
    }),

    icon: css({
      width: "100%",
      height: "100%",
    }),

    sun: css({
      position: "absolute",
      color: "orange",
      filter: "drop-shadow(0 0 2px rgba(0, 0, 0, .5))",
      transform: checked ? "scale(1) rotate(360deg)" : "scale(0)",
      transition: ".5s ease",
      transitionDelay: checked ? ".5s" : "0",
    }),

    moon: css({
      filter: "drop-shadow(0 0 2px rgba(0, 0, 0, .5))",
      color: "skyblue",
      transform: checked ? "rotate(360deg) scale(0)" : "none",
      transition: ".5s ease",
      transitionDelay: checked ? "0" : ".5s",
    }),

    animateBackGround: css({
      position: "fixed",
      width: "300vh",
      height: "200vh",
      background: "#f8f8f8",
      zIndex: -2,
      clipPath: checked ? "circle(100% at center)" : "circle(0% at center)",
      transition: "1.5s ease-out",
      pointerEvents: "none",
    }),
  };

  const setTheme = () => {
    localStorage.setItem("theme", isDark ? "ligth" : "dark");
  };

  return (
    <>
      <label css={classes.label}>
        <input
          css={classes.checkBox}
          type="checkbox"
          onClick={() => {
            setChecked(!checked);
            setTheme();
          }}
        />
        <MoonIcon css={[classes.icon, classes.moon]} />
        <SunIcon css={[classes.icon, classes.sun]} />
        <span css={classes.animateBackGround}></span>
      </label>
    </>
  );
};

export default EmotionAnimationButton;
