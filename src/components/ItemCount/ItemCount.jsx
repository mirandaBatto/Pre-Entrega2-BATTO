import { useState } from "react"

const ItemCount = ({valorInicial, stock}) => {
    const [valor, setValor] = useState(valorInicial)
    const restar = ()=> { (valor > valorInicial) && setValor(valor - 1) }
    const sumar = ()=> {(valor < stock) && setValor(valor + 1)}

  return (
    <div className="flex gap-3 items-center bg-gray-100 mt-4 w-40 rounded-lg">
      <button onClick={restar} className="bg-violet-600 p-2 m-2 rounded text-white w-10 h-10 text-lg hover:bg-violet-800">-</button>
        <p>{valor}</p>
      <button onClick={sumar} className="bg-violet-600 p-2 m-2 rounded text-white w-10 h-10 text-lg hover:bg-violet-800">+</button>
    </div>
  )
}

export default ItemCount