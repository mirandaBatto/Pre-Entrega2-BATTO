import { Link } from "react-router-dom"
const Sections = () => {
  return (
    <>
      <Link to={"/"} className="text-md hover:text-gray-500 uppercase" >Inicio</Link>
      <Link to={"/category/dispositivos"} className="text-md hover:text-gray-500 uppercase">Consolas y Dispositivos</Link>
      <Link to={"/category/videojuegos"} className="text-md hover:text-gray-500 uppercase">Videojuegos</Link>
      <Link to={"/category/accesorios"} className="text-md hover:text-gray-500 uppercase">Accesorios</Link>
      <Link to={"/category/componentes"} className="text-md hover:text-gray-500 uppercase">Componentes de PC</Link>
      <Link to={"/contacto"} className="text-md hover:text-gray-500 uppercase">Contacto</Link>
    </>
  )
}

export default Sections