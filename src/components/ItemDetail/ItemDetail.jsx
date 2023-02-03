import ItemCount from "../ItemCount/ItemCount"
import ProductDetail from "../ProductDetail/ProductDetail"
const ItemDetail = ({item}) => {

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded-xl border border-gray-200" src={`../img/${item.img}`} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
        <ProductDetail item={item}/>      
        <div className="mt-3 items-center" >
          <button className=" ml-auto text-white items-center bg-violet-500 border-0 py-3 px-4 focus:outline-none hover:bg-violet-600 rounded">Finalizar Compra</button>
          <button className="rounded  bg-gray-200 p-3 border-0 inline-flex items-center justify-center text-gray-500 ml-4  hover:bg-gray-300">
            Añadir al Carrito
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
          <ItemCount valorInicial={1} stock={item.stock}/>
          </div>
        </div>
      </div>
    </div>
  
    )
}

export default ItemDetail