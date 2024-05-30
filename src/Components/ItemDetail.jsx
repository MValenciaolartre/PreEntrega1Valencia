
import Contador from './ItemCount'
import { useState, useEffect, useContext } from "react";
import { contexto } from "../contexto";


const ItemDetail = ({producto }) => {

    const elValorDelContexto = useContext(contexto);  // Correct use of useContext
  console.log(elValorDelContexto);
    

    const handleConfirm = (numero) => {
        elValorDelContexto.agregarAlCarrito(numero, producto)
    }


    return (
        <div>
             <h2 className="my-2 font-bold">{"Detalles: "+ producto.detalles}</h2>
             <Contador product={producto} handleConfirm={handleConfirm}/>
            
        </div>
    )

}

export default ItemDetail