import "./App.css";
import Pokedex from "./Components/Pokedex.jsx";
import "./styles/styles.css";


function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Pokedex 
        nombre='Bulbasaur'
        numero='0001'
        imagen='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
        tipo='Planta - Venenno'
        habilidad='Espesura'
        debilidad='Fuego - Hielo'
        />
        <Pokedex 
        nombre='Charizard'
        numero='0006'
        imagen='https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
        tipo='Fuego'
        habilidad='Mar de llamas'
        debilidad='Agua - Tierra'
        />
        <Pokedex 
        nombre='Pikachu'
        numero='0025'
        imagen='https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
        tipo='Eléctrico'
        habilidad='Elec. Estática'
        debilidad='Tierra'
        />
      </div>
    </div>
  );
}

export default App;
