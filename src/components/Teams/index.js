import { useState } from 'react'
import Collaborator from '../Collaborators'
import hexToRgba from 'hex-to-rgba'
import './teams.css'

const Teams = (props) => {
    const [color, setColor] = useState(props.color)
     
    return(
        (props.collaborators.length > 0) ? <section className='teams' style={{backgroundColor:hexToRgba(color, '0.5')}}>
            <input value={color} onChange={value => setColor(value.target.value)} type='color' className='input-color' />
            <h3 style={{borderColor:color}}>{props.name}</h3>
            <div className="collaborators">
                {props.collaborators.map(collaborator => <Collaborator  key={collaborator.name} favorite={collaborator.favorite} id={collaborator.id} primaryColor={color} name={collaborator.name} image={collaborator.image} office={collaborator.cargo} deletCollaborator={props.deletCollaborator} inFavorite={props.inFavorite}/>)}
            </div>
        </section>: ''
    )
}

export default Teams
