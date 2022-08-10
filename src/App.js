import img from "./images/beetle.jpg";
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount"

function App() {

  const styles = {marginTop : "20px", color : "darkgray"};
  let location = "Buenos Aires, Argentina"

  const ItemList = {
    greeting: "Productos:"
  }

  return (
    <div className="App">
      <NavBar/>
      
      <h2 className='ache1'>Manejo y cuidado de los habitantes pequeños del mundo</h2>
      <p style={ styles}>{location}</p>
      <img src={img} alt = "imagen"/>
      <br />
      <button onClick={ ()=> alert("hola")}>Contacto</button>
      <ItemCount initial={1} stock={20}/>
      
      <ItemListContainer greetingdata={ItemList}/>

    </div>
  );
}

export default App;
