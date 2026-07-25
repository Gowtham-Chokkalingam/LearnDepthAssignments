import { useState } from "react";

function App() {
  const containerOutterStyle = {
    gap: "20px",
    color: "black",
    background: "black",
    height: "100vh",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  const containerStyle = {
    display: "grid",
    gap: "20px",
    color: "white",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const [theme, setTheme] = useState(containerOutterStyle);
  const [innerTheme, setInnerTheme] = useState(containerStyle);
  return (
    <section style={theme}>
      <div style={innerTheme}>
        <h1>Select Color </h1>

        <button
          onClick={() => {
            setTheme({ ...theme, background: "white", color: "black" });
            setInnerTheme({ ...innerTheme, color: "black" });
            console.log("background:", theme.background);
            console.log("LightTheme:", innerTheme.color);
          }}
        >
          Light Mode
        </button>
        <button
          onClick={() => {
            setTheme({ ...theme, background: "black", color: "white" });
            setInnerTheme({ ...innerTheme, color: "white" });
            console.log("background:", theme.background);
            console.log(" Dark Mode-innerTheme:", innerTheme.color);
          }}
        >
          Dark Mode
        </button>
      </div>
    </section>
  );
}

export default App;
