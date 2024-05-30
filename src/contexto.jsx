import { createContext, useState } from "react";

const contexto = createContext();  // Create context
const Provider = contexto.Provider;

function CarritoProvider(props) {
    const [cantCarrito, setCantCarrito] = useState(0);

    return (
        <Provider value={{ carrito: cantCarrito }}>
            {props.children}
        </Provider>
    );
}

export { contexto };  // Named export for contexto
export default CarritoProvider;  // Default export for CarritoProvider
