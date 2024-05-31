
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

  const handleSubmit = (e) => {
    e.preventDefault()

    if (nombre && telefono && email === email2) {

    createVenta(productosProps, elValorDelContexto.total)
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
      <div><p> Precio total:{elValorDelContexto.total}</p></div>
      <form onSubmit={handleSubmit}>
      <div>
        <input
          className="text-black"
          type="text"
          placeholder="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <input
          className="text-black"
          type="text"
          placeholder="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <div>
        <input
          className="text-black"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          className="text-black"
          type="text"
          placeholder="Repite email"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
        />
      </div>
      <button type="submit">Comprar</button>
    </form>
    </div>
    
  )
}
export default Cart