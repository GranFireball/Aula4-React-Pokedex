import React from 'react';
import Pokedex from './components/pokedex';


function App() {
  const [pokemon, setPokemon] = React.useState({});
  const [id, setId] = React.useState(1);

  React.useEffect(() => {
    Carregar();
  }, [id]);

  function Reduzir() {
    setId(id - 1);
    if (id <= 1) {
      setId(1);
    }
  }
  function Adicionar() {
    setId(id + 1);
    Carregar();
  }

  function Carregar() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }
  if(pokemon.name){
    return (
      <div>
        <button onClick={Carregar}>Carregar</button>
        <Pokedex pokemon={pokemon} controle={{id, Reduzir, Adicionar}}/>
      </div>
    )
  }
  else{
    return(
    <button onClick={Carregar}>Carregar</button>  
    )
    
  }
  
}

export default App;
