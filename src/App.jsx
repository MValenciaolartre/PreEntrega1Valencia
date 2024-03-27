import NavBar from "./Components/NavBar.jsx"
import ItemListContainer from "./Components/ItemListContainer.jsx"
import { Import } from "lucide-react"

function App() {

  
  return (
    <>
       <NavBar/>
       <ItemListContainer greeting="Bienvenidos a Mi Tienda" />
    </>
  )
}

export default App
