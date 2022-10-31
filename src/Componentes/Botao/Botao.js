import './Botao.css'

const Botao = (props) => {
    return (
        <button class="botao">
            {props.texto}
        </button>
    )
}

export default Botao