import "./App.css";
import Pokedex from "./Components/Pokedex.jsx";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Pokedex
          nombre="Bulbasaur"
          numero="0001"
          imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
          tipo="Planta - Venenno"
          habilidad="Espesura"
          debilidad="Fuego - Hielo"
        />
        <Pokedex
          nombre="Charizard"
          numero="0006"
          imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
          tipo="Fuego"
          habilidad="Mar de llamas"
          debilidad="Agua - Tierra"
        />
        <Pokedex
          nombre="Pidgeot"
          numero="0018"
          imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"
          tipo="Volador"
          habilidad="Vista lince"
          debilidad="Electrico - Hielo - Roca"
        />
        <Pokedex
          nombre="Pikachu"
          numero="0025"
          imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
          tipo="Eléctrico"
          habilidad="Elec. Estática"
          debilidad="Tierra"
        />
        <Pokedex
          nombre="Golbat"
          numero="0042"
          imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png"
          tipo="Veneno - Volador"
          habilidad="Fuerza mental"
          debilidad="Eléctrico - Hielo - Roca"
        />
        <Pokedex
          nombre="Rapidash"
          numero="0078"
          imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png"
          tipo="Fuego"
          habilidad="Fuga - Absorbe fuego"
          debilidad="Agua - Tierra - Roca"
        />
        <Pokedex
          nombre="Haunter"
          numero="0093"
          imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png"
          tipo="Fantasma"
          habilidad="Levitación"
          debilidad="Fantasma - Siniestro"
        />
        <Pokedex
          nombre="Cubone"
          numero="0104"
          imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png"
          tipo="Tierra"
          habilidad="Cabeza roca"
          debilidad="Agua - Planta"
        />
        <Pokedex
          nombre="Snorlax"
          numero="0143"
          imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
          tipo="Normal"
          habilidad="Inmunidad"
          debilidad="Lucha"
        />
        <Pokedex
          nombre="Mewtwolax"
          numero="0150"
          imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
          tipo="Psíquico"
          habilidad="Presión"
          debilidad="Fantasma - Siniestro"
        />
      </div>
    </div>
  );
}

export default App;
