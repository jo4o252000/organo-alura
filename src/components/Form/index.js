import Button from '../Button'
import Select from '../Select'
import CampoText from '../TextField'
import './form.css'

const Form = () => {
    const teams = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Ui-Ux'
    ]

    const saveForm = (event) => {
        event.preventDefault()
        console.log('form foi caraio')
    }
    return(
        <section className="form">
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoText required = {false} label="nome" placeholder="Digite seu nome"/>
                <CampoText label="cargo" placeholder="Digite seu cargo"/>
                <CampoText label="imagem" placeholder="Digite o endereço da imagem"/>
                <Select label="Time" itens={teams}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    ) 
}

export default Form