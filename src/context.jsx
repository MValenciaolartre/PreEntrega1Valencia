import React, { createContext, useState } from 'react';

export const Contexto = createContext();

export function CarritoProvider(props) {
    const [cantCarrito, setCantCarrito] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (cant, item) => {
        setCantCarrito(cantCarrito + cant);

        const copia = [...carrito];
        const productoyCantidad = { ...item, cantidad: cant };
        copia.push(productoyCantidad);

        setCarrito(copia);

        // Asumiendo que el item tiene una propiedad `precio` para calcular el precio total.
        setPrecioTotal(precioTotal + item.precio * cant);
    };

    const borrarDelCarrito = (id) => {
        const copia = carrito.filter(producto => producto.id !== id);
        const productoEliminado = carrito.find(producto => producto.id === id);

        if (productoEliminado) {
            setCantCarrito(cantCarrito - productoEliminado.cantidad);
            setPrecioTotal(precioTotal - productoEliminado.precio * productoEliminado.cantidad);
        }

        setCarrito(copia);
    };

    const vaciarCarrito = () => {
        setCantCarrito(0);
        setPrecioTotal(0);
        setCarrito([]);
    };

    const valorActual = {
        carrito,
        cantCarrito,
        precioTotal,
        agregarAlCarrito,
        borrarDelCarrito,
        vaciarCarrito
    };

    return (
        <Contexto.Provider value={valorActual}>
            {props.children}
        </Contexto.Provider>
    );
}