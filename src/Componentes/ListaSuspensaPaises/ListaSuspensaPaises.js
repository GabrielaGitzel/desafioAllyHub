import './ListaSuspensaPaises.css'

const ListaSuspensaPaises = (props) => {
    return (
        <div className='lista-suspensa-paises'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensaPaises