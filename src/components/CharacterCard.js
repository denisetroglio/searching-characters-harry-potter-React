import { Link } from "react-router-dom";
import hogwarts from "../images/hogwarts.jpg";

const CharacterCard = (props) => {
  const GetImage = (image) =>{
    if (props.listItem.image === ""){
      return hogwarts;
    }
  };

  return (
    <Link className="link" to={`/character/${props.listItem.name}`}>
      <img
        className='card_img'
        src={props.listItem.image}
              alt={`Foto de ${props.listItem.name}`}
      />
      <h4 className='name_Character'>{props.listItem.name}</h4>
      <p className='specie'>{props.listItem.species}</p>
    </Link>
  );
};

export default CharacterCard;
