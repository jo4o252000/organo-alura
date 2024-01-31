import './textField.css'

const CampoText = (props) => {//PROPS(pode ser qual quer nome, mas por padrão é muito utiliziado o props) -> SÃO AS PROPRIEDADES QUE SERÃ ENVIADAS PARA O COMPONENTE COMO PARAMETRO
    const getValue = (event) => {
       props.valueInput(event.target.value)
    }
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={getValue} required = {props.required} placeholder={props.placeholder} />
        </div>
    )
}
export default CampoText