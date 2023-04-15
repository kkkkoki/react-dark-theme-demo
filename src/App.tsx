import { Global, ThemeProvider, css } from "@emotion/react";
import { useState } from "react";
import "./App.css";
import ThemeToggleButton from "./components/MotionAnimationButton";

const theme = {
  light: {
    mode: "ligth",
    background: "#f8f8f8",
    color: "#000000",
  },

  dark: {
    mode: "dark",
    background: "#2b2b2b",
    color: "#f0f5fa",
  },
};

function App() {
  const [isDark, setIsDark] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  // 本来は肥大化を防ぐ為にstyles/global.tsとかに記述
  const globalStyle = css({
    body: {
      color: isDark ? theme.dark.color : theme.light.color,
      background: isDark ? theme.dark.background : theme.light.background,
    },
  });

  const classes = {
    header: css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 56,
      padding: "0 24px",
      borderBottom: `solid 1px ${
        isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)"
      }`,
      a: {
        textDecoration: "none",
      },
    }),

    layout: css({
      display: "flex",
      alignItems: "center",
      gap: "24px",
    }),

    logo: css({
      fontSize: "32px",
      color: isDark ? theme.dark.color : theme.light.color,
    }),

    links: css({
      display: "flex",
      gap: "24px",
    }),

    link: css({
      color: isDark ? theme.dark.color : theme.light.color,
    }),

    themeToggle: css({
      position: "relative",
      display: "flex",
      alignItems: "center",
    }),

    animateBg: css({
      position: "absolute",
      background: isDark ? theme.dark.background : theme.light.background,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "200vmax",
      height: "150vmax",
      clipPath: isDark ? "circle(100% at center)" : "circle(0% at center)",
      transition: "1.5s ease-out",
      zIndex: -2,
    }),
  };
  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      {/* <EmotionAnimationButton /> */}
      <Global styles={globalStyle} />
      <header css={classes.header}>
        <a href="#">
          <h1 css={classes.logo}>LOGO</h1>
        </a>
        <div css={classes.layout}>
          <div css={classes.links}>
            <a css={classes.link} href="#">
              About
            </a>
            <a css={classes.link} href="#">
              Contact
            </a>
            <a css={classes.link} href="#">
              Search
            </a>
          </div>
          <div css={classes.themeToggle}>
            {/* 多分アニメーションするbgのコンポーネントwrapperを作ったほうがよい（
            現状stateの変更でapptsxが再レンダリングされるので、先にbgの色が変更されてアニメーションしているのか視認できない状態） */}
            <ThemeToggleButton isDarkMode={isDark} toggle={setIsDark} />
            <span css={classes.animateBg}></span>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default App;
