import img from "./images/drawing.png";
import './App.css';
import NavBar from "./components/NavBar";


function App() {

  const styles = {marginTop : "20px", color : "blue"};
  let usuario = "Marcos";

  return (
    <div className="App">
      <NavBar/>
      
      <h1 className='ache1'>Hola {usuario}</h1>
      <p style={ styles }>ñamiñamiñami</p>
      <img src={img}/>
      <button onClick={ ()=> alert("hola")}>clickme</button>
    </div>
  );
}

export default App;
