import img from "./images/beetle.jpg";
import './App.css';
import NavBar from "./components/NavBar";
import CartView from "./components/CartView";
import Footer from "./components/footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { CartProvider } from "./components/cartContext";
import firestoreDB from "./services/firebase";


function App() {


  const styles = {marginTop : "20px", color : "darkgray"};
  let location = "Buenos Aires, Argentina"

  return (
    <div className="App">


      <BrowserRouter>
        <CartProvider>

            <h2 className='h1'>Manejo y cuidado de los habitantes pequeños del mundo</h2>
            <NavBar/>
            <p style={ styles}>{location}</p>
            <img src={img} alt = "imagen"/>
            <br />
 
          <Routes>
            <Route path="/" element={<ItemListContainer/> }/>
            <Route path="/category/:idcat" element={<ItemListContainer/>}/>
            <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartView/>}/>
            <Route path="*" element={<h1>404: Elemento no encontrado</h1>}/>
          </Routes>

          <Footer/>

          </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
