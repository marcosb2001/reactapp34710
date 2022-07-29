import img from "./images/beetle.jpg";
import './App.css';
import NavBar from "./components/NavBar";


function App() {

  const styles = {marginTop : "20px", color : "darkgray"};

  return (
    <div className="App">
      <NavBar/>
      
      <h2 className='ache1'>Manejo y cuidado de los habitantes pequeños del mundo</h2>
      <p style={ styles }>Buenos Aires, Argentina</p>
      <img src={img}/>
      <button onClick={ ()=> alert("hola")}>Contacto</button>
    </div>
  );
}

export default App;
