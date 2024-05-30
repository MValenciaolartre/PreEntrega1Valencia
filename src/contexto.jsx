import { createContext, useState } from "react";

const contexto = createContext();
const Provider = contexto.Provider;

function CarritoProvider (props){

const [cantCarrito, setCantCarrito]= useState(0)

     return(
<Provider value={{carrito: cantCarrito} }>
{props.children}
</Provider>
     )
}
export default  CarritoProvider