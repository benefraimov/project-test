import ThemeContext from "./Example - Props Drilling/ThemeContext";
import UserContextProvider from "./Example2 - ContextApi/UserContextProvider";

const App = () => {
  return (
    <>
      {/* <ThemeContext /> */}
      <UserContextProvider />
    </>
  )
}

export default App