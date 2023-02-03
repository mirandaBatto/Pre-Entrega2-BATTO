import { Link } from "react-router-dom"
const Item = ({item}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-100 m-5 hover:bg-gray-200">
      <img className="p-8 rounded-t-lg" src={`../img/${item.img}`} alt={item.nombre} />
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-violet-900 dark:text-violet-700">{item.nombre}</h5>
        </a>
        <p className="text-lg  text-black">Marca: <span className="text-gray-700 ">{item.marca}</span></p>
        <p className="text-lg  text-black">Modelo: <span className="text-gray-700 ">{item.modelo}</span></p>
        <span className="text-2xl font-semibold text-gray-900 dark:text-gray-700">${new Intl.NumberFormat("de-DE").format(item.precio)}</span>
        <div className=" flex items-center justify-between mt-3">
          <Link to={`/item/${item.id}`} className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Ver el Producto</Link>
        </div>
      </div>
    </div>
  )
}

export default Item