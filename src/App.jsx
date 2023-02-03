import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/category/:idCategoria" element={<ItemListContainer/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    </>
  );
}
export default App;
