import { Navbar } from "./components/Navbar/Navbar"
import { ItemListContainer } from "./components/ItemListContainer"

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Holis"} />
    </>
  )
}

export default App
