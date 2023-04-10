import "./App.css";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { css } from "@emotion/react";
import { mq } from "./utils/mediaQuerise";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(true);
  const classes = {
    label: css({
      display: "grid",
      placeItems: "center",
      justifyContent: "space-around",
      width: 80,
      height: 80,
      borderRadius: "50%",
      cursor: "pointer",
    }),

    checkBox: css({
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
    }),

    sun: css({
      position: "absolute",
      width: 40,
      height: 40,
      color: "#666",
      filter: "drop-shadow(0 0 2px rgba(0, 0, 0, .5))",
      transform: checked ? "scale(1) rotate(360deg)" : "scale(0)",
      transition: ".5s ease",
      transitionDelay: checked ? ".5s" : "0",
    }),

    moon: css({
      width: 40,
      height: 40,
      color: "#666",
      filter: "drop-shadow(0 0 2px rgba(0, 0, 0, .5))",
      transform: checked ? "rotate(360deg) scale(0)" : "none",
      transition: ".5s ease",
      transitionDelay: checked ? "0" : ".5s",
    }),

    toggle: css({
      position: "absolute",
      display: "block",
      width: 80,
      height: 80,
      background: checked ? "#f8f8f8" : "#2b2b2b",
      borderRadius: "50%",
      boxShadow:
        "inset 0 8px 60px rgba(0, 0, 0, .1), inset 0 8px 8px rgba(0, 0, 0, .1), inset 0 -4px 4px rgba(0, 0, 0, .1)",
      zIndex: -1,
      transition: ".5s",
    }),
  };

  return (
    <>
      <label css={classes.label}>
        <input
          css={classes.checkBox}
          type="checkbox"
          onClick={() => setChecked(!checked)}
        />
        <MoonIcon css={classes.moon} />
        <SunIcon css={classes.sun} />
        <span css={classes.toggle}></span>
      </label>
    </>
  );
}

export default App;
