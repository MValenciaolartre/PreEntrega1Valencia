import { BrowserRouter } from "react-router-dom"
import NavBar from "./Components/NavBar.jsx"
import ItemListContainer from "./Components/ItemListContainer.jsx"
import Main from "./Components/Main.jsx"
import CarritoProvider from "./contexto.jsx"
import { Import } from "lucide-react"

function App() {

  
  return (
    <>
     <BrowserRouter>
     <CarritoProvider>
       <NavBar/>
       <Main/>
       </CarritoProvider>
       </BrowserRouter>
    </>
  )
}

export default App
