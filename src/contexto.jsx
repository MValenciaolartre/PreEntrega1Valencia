import { createContext, useState } from "react";

const contexto = createContext();  // Create context
const Provider = contexto.Provider;

function CarritoProvider(props) {
    const [cantCarrito, setCantCarrito] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (cant, item) => {
        setCantCarrito(cantCarrito + cant)
        
        const copia = carrito.slice(0)
        
        const productoConCantidad = { ...item, cantidad: cant }
        copia.push(productoConCantidad)
        
        setCarrito(copia)
        
        // Calcular el nuevo precio total
        const nuevoPrecioTotal = precioTotal + (cant * item.precio)
        setPrecioTotal(nuevoPrecioTotal)
        
        console.log(`Precio Total: ${nuevoPrecioTotal}`)
    }
    
        const borrarDelCarrito = (id) => {
      
    }

    const vaciarCarrito = () => {
        console.log('vaciar')
        setCantCarrito(0)
        setCarrito([])
    }


    return (
        <Provider value={{
        carrito: cantCarrito, 
        productosCarrito: carrito,
        total:precioTotal,
        agregarAlCarrito: agregarAlCarrito,
        borrarDelCarrito: borrarDelCarrito,

        vaciarCarrito:vaciarCarrito
         }}>
            {props.children}
        </Provider>
    );
}

export { contexto };  // Named export for contexto
export default CarritoProvider;  // Default export for CarritoProvider
