import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { app } from "../firebase";
import { getFirestore , collection , getDocs } from "firebase/firestore";

const db = getFirestore (app)

const productsCollection = collection(db,"products")
const query = getDocs(productsCollection)


const ItemListContainer = ({ greeting }) => {
  const params = useParams()
  const [productos, setProductos] = useState([])
  const baseUrl= "https://maidavalencia123.000webhostapp.com/"
  useEffect(() => {
    const fetchData = async () => {
      
            let url = "https://maidavalencia123.000webhostapp.com/api.php";
            
          if (params.id) {
                url += `?category=${params.id}`;
                
            }
      
      query
      .then ((resultado)=>{
  
       const products = resultado.docs.map(doc =>{return doc.data() })
       setProductos(products);
       console.log (products)
      })
    .catch((error) => {
  console.log(error)
})
    };

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