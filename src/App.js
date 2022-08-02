import img from "./images/beetle.jpg";
import img2 from "./images/drawing.png"
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"

function App() {

  const styles = {marginTop : "20px", color : "darkgray"};
  let location = "Buenos Aires, Argentina"

  const ItemList = {
    greeting: "Lista de items:"
  }

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer data={ItemList}/>
      
      <h2 className='ache1'>Manejo y cuidado de los habitantes pequeños del mundo</h2>
      <p style={ styles }>{location}</p>
      <img src={img}/>
      <br />
      <button onClick={ ()=> alert("hola")}>Contacto</button>

    </div>
  );
}

export default App;
