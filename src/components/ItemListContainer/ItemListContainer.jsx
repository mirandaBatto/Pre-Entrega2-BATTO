import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();
  useEffect(()=>{
    if(idCategoria){
      fetch("../json/productos.json")
    .then(response => response.json())
    .then(items =>{
      const products = items.filter(item => item.idCategoria === idCategoria)
      const productsList = ItemList({products});
      console.log(productsList)
      setProductos(productsList)
    })
    .catch(error => console.log(error))
    }else{
      fetch("./json/productos.json")
      .then(response => response.json())
      .then(products =>{
        const productsList = ItemList({products});
        console.log(productsList)
        setProductos(productsList)
      })
      .catch(error => console.log(error))
    }
  }, [idCategoria])


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-3 items-center">
      {productos}
    </div>
    )
}

export default ItemListContainer