import Tipo from "./tipo";
import Habilidade from "./habilidade";

function Pokeinfo(props){
    const pokemon = props.pokemon;
    return(
        <>
        <p>Peso: {pokemon.weight}</p>
        <p>Altura: {pokemon.height}</p>
        <ul>
            {pokemon.types?.map((tipo, i) => <Tipo key={i} tipo={tipo}/>)}
        </ul>
        <Habilidade habilidade={pokemon.abilities}/>
        </>
        
        
    )
}

export default Pokeinfo;