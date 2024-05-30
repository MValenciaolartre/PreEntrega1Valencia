import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { getAllProducts,getProductByCategory } from "../utils/utils";

const ItemListContainer = ({ greeting }) => {
  const params = useParams()
  const [productos, setProductos] = useState([])
  useEffect(() => {
    const fetchData = () => {
      if (params.id) {
        getProductByCategory(params.id)
        .then((resultado)=>{
          setProductos(resultado)
        })
    } 
    else{
      getAllProducts()
      .then((resultado)=>{
        setProductos(resultado)
      })
    }

    }
    fetchData();
}, [params.id]);
  return (
  <main className="flex flex-wrap justify-center gap-8">
      {productos.map((producto) => (
         <div>
     <div className="p-2 transition rounded-md  user-card hover:scale-100 group bg-slate-300 max-w-xs  ">
      <div className=" overflow-hidden aspect-w-16 aspect-h-9" style={{height:"300px",width:"300px" }}>
                <img className=" w-full h-full object-cover transition-all duration-500 rounded-md  group-hover:grayscale-0 group-hover:scale-150" 
                src={producto.imagen} alt="card image" />
            </div>
            <h2 className="my-2 font-bold">{producto.nombre}</h2>
            <Link to={`/item/${producto.id}`}>ver mas</Link>
      </div>
      
        </div>                
     ))}
    </main>
  )
}

export default ItemListContainer
//aqui vamos a poner todos loa productos 
//<p className="text-blue-500 font-bold text-center pt-10">{greeting}</p>