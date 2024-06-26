import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductDetail } from "../utils/utils";


const ItemDetailContainer = ({}) => {


  const params = useParams()
  const [producto, setProducto] = useState([])
   useEffect(() => {
    const fetchData = async () => {          
      getProductDetail(params.id)
      .then((resultado)=>{
          setProducto(resultado[0])
      })
    };

    fetchData();
}, [params.id]);
  return (
  <main className="flex flex-wrap justify-center gap-8">
     
         <div>
          
      <div className="p-2 transition rounded-md  user-card hover:scale-100 group bg-slate-300 max-w-xs">
      <div className="overflow-hidden aspect-w-16 aspect-h-9"style={{height:"300px",width:"300px" }}>
                <img className="w-full h-full object-cover transition-all duration-500 rounded-md  group-hover:grayscale-0 group-hover:scale-150" 
                src={producto.imagen} alt="card image" />

            </div>
            <h2 className="my-2 font-bold">{producto.nombre}</h2>
            <h2 className="my-2 font-bold">{"Precio: "+ producto.precio}</h2>
            <h2 className="my-2 font-bold">{"Categoria: "+ producto.categoria}</h2>
            <ItemDetail producto= {producto}  ></ItemDetail>
            
            <Link className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline" to={`/`}>Volver</Link>

            

      </div>
      <div className="container mx-auto h-40 mt-3">
      </div>
        </div>                
    </main>
  )
}

export default ItemDetailContainer

