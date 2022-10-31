import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensaPaises from '../ListaSuspensaPaises/ListaSuspensaPaises'
import './Formulario.css'
import ListaSuspensaCidades from '../ListaSuspensaCidades/ListaSuspensaCidades'
import Botao from '../Botao/Botao'

const Formulario = () => {

    const paises = [
        'Brasil',
        'Estados Unidos',
        'Europa',
        'Japão',
        'Groelândia'
    ]

    const cidades = [
        'Sumaré',
        'Campinas',
        'São Paulo',
        'Hortolândia',
        'Paulínia'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('O destino foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados e compartilhe conosco o seu próximo destino!</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                />
                <CampoTexto
                    obrigatorio={true}
                    label="E-mail"
                    type="text"
                    placeholder="Digite seu e-mail"
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Telefone"
                    type="email"
                    placeholder="Digite seu telefone"
                />
                <CampoTexto
                    obrigatorio={true}
                    label="CPF"
                    placeholder="Digite seu CPF"
                />
                <ListaSuspensaPaises
                    obrigatorio={true}
                    label='País'
                    itens={paises}
                />
                <ListaSuspensaCidades
                    obrigatorio={true}
                    label='Cidade'
                    itens={cidades}
                />
                <Botao texto="Enviar meu destino"/>
            </form>
        </section>
    )
}

export default Formulario