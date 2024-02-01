import './collaborators.css'

// https://github.com/jo4o252000.png

const Collaborator = ({primaryColor,name, image, office}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor:primaryColor}}>
                <img src={image} alt={name} />
            </div>
            <div className="rodape">
                <h4>{name}</h4>
                <h5>{office}</h5>
            </div>
        </div>

    )
}

export default Collaborator