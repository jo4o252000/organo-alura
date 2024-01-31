import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form';

function App() {

  const [collaborators, setCollaborators] = useState([])

  const newCollaborator = (collaborator) => {
    console.log(collaborators)
    setCollaborators([...collaborators, collaborator])//descrição do que está acontecendo(crio um novo array[...collaborators(Distribuo os dados armazenados do array collaborators dentro desse novo array), collaborator(adiciono o novo obejto ao final do array)])
  }
  return (
    <div className="App">
      <Banner />
      <Form registerCollaborator={collaborator => newCollaborator(collaborator)}/>
    </div>
  );
}

export default App;
