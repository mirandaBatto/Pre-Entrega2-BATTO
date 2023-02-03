import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    fetch("../json/productos.json")
    .then(response => response.json())
    .then(products =>{
      const item = products.find(product => product.id === parseInt(id)); ;
      setProducto(item)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="text-gray-700 body-font overflow-hidden bg-gray-100">
        <ItemDetail item={producto}/>
    </div>
    )
}

export default ItemDetailContainer