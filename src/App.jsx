import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import CarritoProvider from "./contexto";

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Main />
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
