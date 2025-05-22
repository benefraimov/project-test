import { useContext } from 'react'
import { ContextProvider } from './ThemeContext'
import GrandChild1 from './GrandChild1'

function Child() {
    const { theme } = useContext(ContextProvider)

    return (
        <div style={{ border: "5px solid white" }}>
            <h1>Child component</h1>
            <p>{theme}</p>
            <GrandChild1 />
        </div>
    )
}

export default Child