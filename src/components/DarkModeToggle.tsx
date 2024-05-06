import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export default function ToggleTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme: string | null = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
    return savedTheme === "dark";
  });

  // save to browser on toggle
  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const toggleTheme = () => {
    const rootElement = document.documentElement;
    if (isDarkTheme) {
      rootElement.setAttribute("data-bs-theme", "light");
    } else {
      rootElement.setAttribute("data-bs-theme", "dark");
    }
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    isDarkTheme ? <Button variant="outline-light" onClick={toggleTheme} className=" p-1 m-1">
      ☀️Light
    </Button> :
      <Button variant="outline-dark" onClick={toggleTheme} className="p-1 m-1">
        🌙Dark
      </Button>
  );
};
