import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Pokedex</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" alt="pokebola" width="100px" height="100px"></img>
      </div>

      <div className="Body">
        <button type="button">Card View</button>
        <button type="button">Table View</button>
      </div>

      <div className="Pokemons">
        <img src="https://www.seekpng.com/png/full/99-991972_16-bit-bulbasaur-pixel-art-pokemon-bulbasaur.png" alt="bulbasaur" width="100px" height="100px" className="pokemon"></img>
        <img src="https://www.nicepng.com/png/full/223-2239852_ivysaur-ivysaur-pixel-art.png" alt="ivysaur" width="100px" height="100px" className="pokemon"></img>
        <img src="https://www.nicepng.com/png/full/168-1685243_venusaur-pokemon-pixel-art-venusaur.png" alt="venusaur" width="100px" height="100px" className="pokemon"></img>
        <img src="https://www.pikpng.com/pngl/b/44-448591_charmander-pixel-art-pokemon-facile-clipart.png" alt="charmander" width="100px" height="100px" className="pokemon"></img>
        <img src="https://www.pikpng.com/pngl/b/197-1972676_charmeleon-charmeleon-pixel-art-grid-clipart.png" alt="charmeleon" width="100px" height="100px" className="pokemon"></img>
        <img src="https://www.seekpng.com/png/full/797-7970826_random-image-from-user-pokemon-charizard-pixel-art.png" alt="charizard" width="100px" height="100px" className="pokemon"></img>

      </div>

    </div>
  );
}

export default App;
