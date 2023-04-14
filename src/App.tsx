import "./App.css";
import { ThemeProvider } from "@emotion/react";
import EmotionAnimationButton from "./components/EmotionAnimationButton";
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
  const isDark = localStorage.getItem("theme") === "dark";

  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      {/* <EmotionAnimationButton /> */}
      <ThemeToggleButton isDarkMode={isDark} />
    </ThemeProvider>
  );
}

export default App;
