import Navbar from "./navbar";
import Pokeinfo from "./pokeinfo";

function Pokedex(props){
    return( 
    <>
    <Navbar pokemon={props.pokemon} controle={props.controle}/>
    <Pokeinfo pokemon={props.pokemon}/>
    </>
    )
}

export default Pokedex;