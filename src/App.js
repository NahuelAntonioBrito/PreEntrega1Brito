import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import './components/ItemListContainer/ItemListContainer.css'

let fondoColor = document.getElementById("colorFondo");
fondoColor.classList.add('colorFondo')

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Bebidas"} />
    </div>
  );
}

export default App;
