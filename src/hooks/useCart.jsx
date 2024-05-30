import { useContext } from "react"
import { Contexto } from "../context";

const useCart = () => {
    const valorActual = useContext(Contexto)
    return valorActual
}

export default useCart;