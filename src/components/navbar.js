function Navbar(props){
    let controle = props.controle;
    let pokemon = props.pokemon;
    return(
        <>
        <button onClick={controle.Reduzir}>Last</button>
        <button onClick={controle.Adicionar}>Next</button>
        <h1>{pokemon.name} #{controle.id}</h1>
        <img src={pokemon.sprites.front_default} />
        </>

    )
}

export default Navbar;