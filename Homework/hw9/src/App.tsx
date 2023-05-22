
import { useContext, useEffect, useState } from "react";
import './styleApp.css'
import { ThemeContext } from ".";




function App() {

  const themeColor: { theme: string } = useContext<{ theme: string }>(ThemeContext);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || themeColor.theme);
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme} className="button">Toggle Theme </button>
    </div>
  );
}

export default App;
