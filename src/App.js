import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form';
import Teams from './components/Teams';

function App() {
  const teamsList = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-end',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Ui-Ux',
      primaryColor: '#BD6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },    
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ]

  const [collaborators, setCollaborators] = useState([])

  const newCollaborator = (collaborator) => {
    console.log('teste', collaborators)
    setCollaborators([...collaborators, collaborator])//descrição do que está acontecendo(crio um novo array[...collaborators(Distribuo os dados armazenados do array collaborators dentro desse novo array), collaborator(adiciono o novo obejto ao final do array)])
  }
  return (
    <div className="App">
      <Banner />
      <Form teams={teamsList.map(team => team.name)} registerCollaborator={collaborator => newCollaborator(collaborator)}/>
      {teamsList.map(team => <Teams key={team.name} name={team.name} colorPrimary={team.primaryColor} colorSecondary={team.secondaryColor} collaborators={collaborators.filter(collaborator => collaborator.teams === team.name)}/>)}
      
    </div>
  );
}

export default App;
