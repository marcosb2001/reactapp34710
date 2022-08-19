import img from "./images/beetle.jpg";
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  const styles = {marginTop : "20px", color : "darkgray"};
  let location = "Buenos Aires, Argentina"

  return (
    <div className="App">


      <BrowserRouter>

            <h2 className='h1'>Manejo y cuidado de los habitantes pequeños del mundo</h2>
            <NavBar/>
            <p style={ styles}>{location}</p>
            <img src={img} alt = "imagen"/>
            <br />
 
          <Routes>

            <Route path="/" element={<ItemListContainer/> }/>
            <Route path="/category/:idcat" element={<ItemListContainer/>}/>
            <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<h1>Carrito</h1>}/>
            <Route path="*" element={<h1>404: Elemento no encontrado</h1>}/>

          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
