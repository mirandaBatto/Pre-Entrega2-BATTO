
const ProductDetail = ({item}) => {
  return (
    <>
          <h2 className="text-xl title-font text-gray-500 tracking-widest mb-3">{item.marca}</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">{item.nombre}</h1>
          <p className="leading-relaxed text-lg mb-4">Modelo: {item.modelo}</p>
          <>
            <span className=" title-font font-medium text-2xl text-gray-900">${new Intl.NumberFormat("de-DE").format(item.precio)}</span>
            <p className="leading-relaxed text-xl mb-4 mt-3">Stock: {item.stock}</p>
          </>
    </>
  )
}

export default ProductDetail