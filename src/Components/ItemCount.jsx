import { useState } from "react"

function Contador(props) {

    const [numero, setNumero] = useState(0)
    
    const incrementar = () => {
        setNumero(numero + 1)
    }

    const decrementar = () => {
        if (numero > 0){
            setNumero(numero - 1)
        }
    
    }

    const confirmar = () => {
        props.handleConfirm(numero)
    }
    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-4 items-center">
                <button 
                    onClick={incrementar} 
                    className="p-4 text-white bg-gray-500 hover:bg-blue-700 rounded-full shadow-md"
                >
                    +
                </button>
                <p className="text-xl font-bold">{numero}</p>
                <button 
                    onClick={decrementar} 
                    className="p-4 text-white bg-gray-500 hover:bg-red-700 rounded-full shadow-md"
                >
                    -
                </button>
            </div>
            <button 
                onClick={confirmar} 
                className="mt-4 p-2 text-white bg-green-500 hover:bg-green-700 rounded-lg shadow-md"
            >
                Confirmar cantidad
            </button>
        </div>
    );
};




 

export default Contador