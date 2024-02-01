import Collaborator from '../Collaborators'
import './teams.css'

const Teams = (props) => {
    return(
        (props.collaborators.length > 0) ? <section className='teams' style={{backgroundColor:props.colorSecondary}}>
            <h3 style={{borderColor:props.colorPrimary}}>{props.name}</h3>
            <div className="collaborators">
                {props.collaborators.map(collaborator => <Collaborator primaryColor={props.colorPrimary} name={collaborator.name} image={collaborator.image} office={collaborator.cargo}/>)}
                {/* <Collaborator colorPrimary={props.colorPrimaty} /> */}
            </div>
        </section>: ''
    )
}

export default Teams