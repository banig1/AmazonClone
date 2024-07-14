import "./Login.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Login from "./Login";
export const ThemeContext = createContext(null);

function Dark() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="mode" id={theme}>
        <Login/>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
      </ThemeContext.Provider>
  );
}

export default Dark;