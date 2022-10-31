import './ListaSuspensaCidades.css'

const ListaSuspensaCidades = (props) => {
    return (
        <div className='lista-suspensa-cidades'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensaCidades