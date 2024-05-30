import { BrowserRouter } from "react-router-dom"
import NavBar from "./Components/NavBar.jsx"
import ItemListContainer from "./Components/ItemListContainer.jsx"
import Main from "./Components/Main.jsx"
import { Import } from "lucide-react"

function App() {

  
  return (
    <>
     <BrowserRouter>
     
       <NavBar/>
       <Main/>
       
       </BrowserRouter>
    </>
  )
}

export default App
