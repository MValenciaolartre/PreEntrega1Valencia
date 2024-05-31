import { useParams } from "react-router-dom"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { contexto } from "../contexto";

const NavBar = () => { 
  const elValorDelContexto = useContext(contexto);  
  
  const params = useParams()
  const [categorias, setCategorias] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            let url = "https://maidavalencia123.000webhostapp.com/categorias.php";
            console.log(params)
            if (params.categoria) {
                url += `?categoria=${params.categoria}`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCategorias(data.categorias);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [params.categoria]);
    return (
      < >
      {categorias.length>0 &&
      <nav className="bg-sky-100 py-4 shadow-md px-3 md:px-8">
          <div className="container mx-auto">
            <div className="block md:justify-between md:flex">
              <h1 className="text-blue-500 font-bold py-2 text-xl">Mi Tienda</h1>
              <div class="hidden md:flex space-x-4">
                <a href="#" class="hover:bg-gray-700 p-2 rounded px-3 py-2 rounded-md bg-sky-500 text-white cursor-pointer">Inicio</a>
                <a href="#" class="hover:bg-gray-700 p-2 rounded px-3 py-2 rounded-md bg-sky-500 text-white cursor-pointer">Acerca De</a>
                
                {categorias.map((categoria) => (
                        
                   <Link key={categoria.nombre} className="hover:bg-gray-700 p-2 rounded px-3 py-2 rounded-md bg-sky-500 text-white cursor-pointer" to={`/category/${categoria.nombre}`}>{categoria.nombre}</Link>
                    ))}
              
                 <CartWidget total={elValorDelContexto.carrito} link to={'/carrito'}/>
              </div>
            </div>
          </div>
        </nav>
}
      </>
    
  );
};

export default NavBar;