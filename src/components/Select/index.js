import './select.css'

const Select = (props) => {
    return(
        <div className="select">
            <label>{props.label}</label>
            <select>
                {props.itens.map((item) => <option key={item}>{item}</option> )}
            </select>
        </div>
    )
}

export default Select