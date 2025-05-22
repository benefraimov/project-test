import { useContext } from "react"
import { ContextProvider } from "./ThemeContext"

const GrandChild1 = () => {
    const { theme, toggleTheme } = useContext(ContextProvider)

    return (
        <div style={{ border: "5px solid lightBlue" }}>
            <h1>
                GrandChild
            </h1>
            {theme}
            <button onClick={toggleTheme}>שנה ערכת נושא</button>
        </div>
    )
}

export default GrandChild1