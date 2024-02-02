import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form';
import Teams from './components/Teams';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [teamsList, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#D9F7E9'
    },
    {
      id: uuidv4(),
      name: 'Front-end',      
      color: '#E8F8FF'
    },
    {
      id: uuidv4(),
      name: 'Data Science',     
      color: '#F0F8E2'
    },
    {
      id: uuidv4(),
      name: 'Devops',    
      color: '#FDE7E8'
    },
    {
      id: uuidv4(),
      name: 'Ui-Ux',    
      color: '#FAE9F5'
    },
    {
      id: uuidv4(),
      name: 'Mobile',    
      color: '#FFF5D9'
    },    
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FFEEDF'
    },
  ])

  const [collaborators, setCollaborators] = useState([])

  function deletCollaborator(id){
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id))
  }

  function registerTeam(newTeam){
    setTeams([...teamsList, {...newTeam, id:uuidv4()}])
  }
  const newCollaborator = (collaborator) => {
    collaborator.id = uuidv4()
    collaborator.favorite =  false
    setCollaborators([...collaborators, collaborator])//descrição do que está acontecendo(crio um novo array[...collaborators(Distribuo os dados armazenados do array collaborators dentro desse novo array), collaborator(adiciono o novo obejto ao final do array)])
    console.log(collaborators)
  }
  function favoriteCard(id){
    setCollaborators(collaborators.map(collaborator => {
      if(collaborator.id === id) collaborator.favorite = !collaborator.favorite;
      return collaborator
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form registerNewTeam = {registerTeam} teams={teamsList.map(team => team.name)} registerCollaborator={collaborator => newCollaborator(collaborator)}/>
      {teamsList.map(team => <Teams deletCollaborator={deletCollaborator} inFavorite={favoriteCard} key={team.name} name={team.name} color={team.color} collaborators={collaborators.filter(collaborator => collaborator.teams === team.name)} />)}
      
    </div>
  );
}

export default App;

