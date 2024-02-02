import { TiDelete } from "react-icons/ti"
import { CiHeart } from "react-icons/ci";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import './collaborators.css'

// https://github.com/jo4o252000.png

const Collaborator = ({favorite, id, primaryColor,name, image, office, deletCollaborator, inFavorite}) => {
    function clickFavorite(){
        inFavorite(id)
    }
    const propsFavorite = {
        size: 25,
        onClick: clickFavorite
    }
    return (
        <div className="colaborador">
            <TiDelete size={25} className="delet" onClick={() => deletCollaborator(id)} />
            <div className="cabecalho" style={{backgroundColor:primaryColor}}>
                <img src={image} alt={name} />
            </div>
            <div className="rodape">
                <h4>{name}</h4>
                <h5>{office}</h5>
                <div className="favoritar">
                    {favorite ? <BsFillArrowThroughHeartFill {...propsFavorite} color="#ff0000" /> : <CiHeart {...propsFavorite}/>}
                </div>
            </div>
        </div>

    )
}

export default Collaborator