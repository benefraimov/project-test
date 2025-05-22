import { createContext, useState } from 'react'
import Child from './Child';
// Step 1 - יצירת קונטקסט
export const ContextProvider = createContext();

const ThemeContext = () => {
    // Step 2 - הגדרות של משתנים או פונקציות לשינוי המשתנים וכו
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    // Step 2 - End

    return (
        // Step 3
        <ContextProvider.Provider value={{ theme, toggleTheme }}>
            <Child />
        </ContextProvider.Provider>
    )
}

export default ThemeContext