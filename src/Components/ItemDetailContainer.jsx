import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { app } from "../firebase";
import { getFirestore , collection , getDocs } from "firebase/firestore";
import { Import } from "lucide-react";
import ItemDetail from "./ItemDetail";
import { getProductDetail } from "../utils/utils";


const db = getFirestore (app)

const productsCollection = collection(db,"products")
const query = getDocs(productsCollection)


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
            <ItemDetail></ItemDetail>
            <Link to={`/`}>volver</Link>
      </div>
      <div className="container mx-auto h-40 mt-3">
      </div>
        </div>                
    </main>
  )
}

export default ItemDetailContainer
// aqui tenemos que poner un item
