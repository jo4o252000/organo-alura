import './textField.css'

const CampoText = (props) => {//PROPS(pode ser qual quer nome, mas por padrão é muito utiliziado o props) -> SÃO AS PROPRIEDADES QUE SERÃ ENVIADAS PARA O COMPONENTE COMO PARAMETRO
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input required = {props.required} placeholder={props.placeholder} />
        </div>
    )
}
export default CampoText