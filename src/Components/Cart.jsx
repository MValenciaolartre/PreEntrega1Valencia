
import { createSale } from "../../utils"
import { contexto } from "../contexto"
import { useContext } from "react"

function Carrito() {

  const elValorDelContexto = useContext(contexto); 
  console.log(elValorDelContexto);
  let carrito= elValorDelContexto.productosCarrito;

  const handleSubmit = (e) => {
    e.preventDefault()
  
  }

  return (
    <div>
      <h2 className="text-4xl font-bold ">Carrito</h2>
      <div>
        {carrito.map((item) => {
          return (
            <article>
              soy un producto
            </article>
          )
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input className="text-black" type="text" placeholder="nombre" />
        </div>
        <div>
          <input className="text-black" type="text" placeholder="telefono" />
        </div>
        <div>
          <input className="text-black" type="text" placeholder="email" />
        </div>
        <button>Comprar</button>
      </form>
    </div>
  )
}
export default Carrito