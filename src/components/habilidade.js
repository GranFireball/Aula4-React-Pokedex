function Habilidade(props) {
    return (
        <ul>
            {props.habilidade.map((hab, i) => <li key={i}>{hab.ability.name}</li>)}
        </ul>
    )
}

export default Habilidade;