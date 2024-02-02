import { useState } from 'react'
import Button from '../Button'
import Select from '../Select'
import CampoText from '../TextField'
import './form.css'
import InputColor from '../InputColor'

const Form = (props) => {
    

    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [teams, setTeams] = useState('')
    const [nameTeam, setNameTeam] = useState('')
    const [colorTeam, setColorTeam] = useState('')

    const saveForm = (event) => {
        event.preventDefault()
        props.registerCollaborator({
            name,
            cargo,
            image,
            teams
        })
        setName('')
        setCargo('')
        setImage('')
        setTeams('...')
    }

    const registerTeam = (event) => {
        event.preventDefault()
        props.registerNewTeam({name:nameTeam, color:colorTeam})
        setNameTeam('')
        setColorTeam('')
    }
    return(
        <section className="form">
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                {/* O use state sempre vai atualizar o set... e apartir dessa atualização o valor e passado para a variavel(ele é usado para sempre mostrar para o react que foi atualizado e precisa recarregar o componente ) */}
                <CampoText required = {false} label="nome" placeholder="Digite seu nome" value={name} valueInput={value => setName(value)}/>
                <CampoText label="cargo" placeholder="Digite seu cargo" value={cargo} valueInput={value => setCargo(value)}/> 
                <CampoText label="imagem" placeholder="Digite o endereço da imagem"  value={image} valueInput={value => setImage(value)}/>
                <Select label="Time" itens={props.teams} value={teams} valueInput={(value) => {setTeams(value); console.log(value)}}/>
                <Button>
                    Criar Card
                </Button>
            </form>
            <form onSubmit={registerTeam}>
                <h2>Preencha os dados para criar novo time</h2>
                {/* O use state sempre vai atualizar o set... e apartir dessa atualização o valor e passado para a variavel(ele é usado para sempre mostrar para o react que foi atualizado e precisa recarregar o componente ) */}
                <CampoText required = {false} label="nome" placeholder="Digite o nome do time" value={nameTeam} valueInput={value => setNameTeam(value)}/>
                <InputColor label="Cor Do Time" value={colorTeam}  valueInput={value => setColorTeam(value)}/>    
                <Button>
                    Criar Novo Time
                </Button>
            </form>
        </section>
    ) 
}

export default Form