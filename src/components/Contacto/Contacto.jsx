import React from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Contacto = () => {
    const datosFormulario = React.useRef();
    let navigate = useNavigate();

    const consultarFormulario = (e)=>{
        e.preventDefault();
        console.log(datosFormulario.current)
        const datForm = new FormData(datosFormulario.current);
        const contacto = Object.fromEntries(datForm);
        console.log(contacto)
        e.target.reset()
        toast.success("Tu consulta fue enviada");
        navigate("/")

    }

  return (
    <form onSubmit={consultarFormulario} ref={datosFormulario} className="bg-gray-100 p-3 m-6 rounded-xl">
    <div className="mb-6">
    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">Nombre y Apellido</label>
    <input type="text" name="nombre" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Escribe tu Nombre y Apellido" required />
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Correo electrónico</label>
    <input type="email" name="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="nombre@correo.com" required />
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 ">Tu consulta</label>
    <textarea name="textarea" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Escribe tu consulta" required />
  </div>
  <button type="submit" className="text-white bg-violet-700 hover:bg-violet-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar</button>
</form>

  )
}

export default Contacto