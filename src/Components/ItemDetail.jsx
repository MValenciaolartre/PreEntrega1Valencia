import { useContext } from "react"
import Contador from './ItemCount'

const ItemDetail = ({producto }) => {
    //const valorActual = useContext(contexto)

    const handleConfirm = (numero) => {
     //   valorActual.agregarAlCarrito(numero, productO)
    }


    return (
        <div>
             <h2 className="my-2 font-bold">{"Detalles: "+ producto.detalles}</h2>
             <Contador product={producto} handleConfirm={handleConfirm}/>
            
        </div>
    )

}

export default ItemDetail