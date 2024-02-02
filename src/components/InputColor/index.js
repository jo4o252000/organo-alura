import './inputColor.css'

const InputColor = (props) => {
    const getValue = (event) => {
        props.valueInput(event.target.value)
     }
    return(
        <div className="input-color">
            <label>{props.label}</label>
            <input type='color' value={props.value} onChange={getValue} required = {props.required}  />
        </div>
    )
}

export default InputColor;