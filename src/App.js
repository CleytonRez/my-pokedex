import './App.css';
import Pokemon from './components/Pokemon'
import Header from './components/Header'


function App() {

  const list = [
    "https://www.seekpng.com/png/full/99-991972_16-bit-bulbasaur-pixel-art-pokemon-bulbasaur.png",
    "https://www.nicepng.com/png/full/223-2239852_ivysaur-ivysaur-pixel-art.png",
    "https://www.nicepng.com/png/full/168-1685243_venusaur-pokemon-pixel-art-venusaur.png",
    "https://www.pikpng.com/pngl/b/44-448591_charmander-pixel-art-pokemon-facile-clipart.png",
    "https://www.pikpng.com/pngl/b/197-1972676_charmeleon-charmeleon-pixel-art-grid-clipart.png",
    "https://www.seekpng.com/png/full/797-7970826_random-image-from-user-pokemon-charizard-pixel-art.png",
  ]

  return (
    <div className="App">

      <Header title="Pokedex"></Header>

      <div className="Pokemons">
        {
          list.map(
            function (link) {
              return <Pokemon url={link}></Pokemon>
            }
          )
        }

      </div>

    </div>
  );
}

export default App;
