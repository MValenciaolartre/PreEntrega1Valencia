import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const ItemDetailContainer = ({}) => {
  const params = useParams()
  console.log (params)
  const [categorias, setCategorias] = useState([])
  const baseUrl= "https://maidavalencia123.000webhostapp.com/"
  useEffect(() => {
    const fetchData = async () => {
        try {
            let url = "https://maidavalencia123.000webhostapp.com/api.php";
            if (params.id) {
                url += `?id=${params.id}`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data.producto)

            setCategorias(data.producto);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [params.id]);
  return (
  <main className="flex flex-wrap justify-center gap-8">
     
         <div>
      <div className="p-4 transition rounded-md shadow-md user-card hover:scale-105 group bg-slate-300 max-w-xs">
      <div className="overflow-hidden aspect-video">
                <img className="w-full  h-80 transition-all duration-500 rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150" 
                src={baseUrl+categorias.imagen} alt="card image" />

            </div>
            <h2 className="my-2 font-bold">{categorias.nombre}</h2>
            <h2 className="my-2 font-bold">{"Precio: "+ categorias.precio}</h2>
            <h2 className="my-2 font-bold">{"Categoria: "+ categorias.categoria}</h2>
            <Link to={`/`}>volver</Link>
      </div>
      <div className="container mx-auto h-40 mt-3">
      
      </div>
      
        </div>                
     )
    </main>
  )
}

export default ItemDetailContainer
// aqui tenemos que poner un item
