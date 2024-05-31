
import { createVenta } from "../utils/utils";
import { contexto } from "../contexto";
import { useContext, useState } from "react";

const Cart = ({}) => {

  const elValorDelContexto = useContext(contexto);
  let productosProps= elValorDelContexto.productosCarrito

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
 const  [IdVenta, setIdVenta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    if (nombre && telefono && email === email2) {

    let id= createVenta(productosProps, elValorDelContexto.total)
    
    setNombre("")
    setEmail("")
    setTelefono("")
    setEmail("")
    setEmail2("")
    
    console.log (id)

    createVenta(productosProps, elValorDelContexto.total)
    .then((docId) => {
      if (docId) {
        setIdVenta(docId)
        console.log("Venta creada con ID:", docId);
      } else {
        console.log("Hubo un error al crear la venta.");
      }
    })
    .catch((error) => {
      console.error("Error en la creación de la venta:", error);
    });

    elValorDelContexto.vaciarCarrito()
    }
    else{

    alert ("Es obligatorio completar todos  los campos")
    }
  }

  return (
    <div>
      <h2 className="text-4xl font-bold ">Carrito</h2>
      <div>
        {productosProps.map((item) => {
          return (
            <article>
              <span>{item.nombre}</span>
              <span> precio:{item.precio}</span>

            </article>
          )
        })}
      </div>
      <div><p className="text-2xl font-bold text-gray-700"> Precio total:{elValorDelContexto.total}</p></div>
      
      <div><p className="text-2xl font-bold text-gray-700"> Identificador de venta:{IdVenta}</p></div>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border-2 border-gray-300">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
        <input
          className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Teléfono</label>
        <input
          className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Repite Email</label>
        <input
          className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Repite Email"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Comprar
      </button>
    </form>



    </div>
    
  )
}
export default Cart