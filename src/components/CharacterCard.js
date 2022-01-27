import { Link } from "react-router-dom";
import hogwarts from "../images/hogwarts.jpg";

const CharacterCard = (props) => {
  const GetImage = (image) =>{
    if (image === ""){
      return hogwarts;
    } else{
      return props.listItem.image;
    }
  };

  return (
    <Link className="link" to={`/character/${props.listItem.name}`}>
      <img
        className='card_img'
        src={GetImage(props.listItem.image)}
              alt={`Foto de ${props.listItem.name}`}
      />
      <h4 className='name_Character'>{props.listItem.name}</h4>
      <p className='specie'>{props.listItem.species}</p>
    </Link>
  );
};

export default CharacterCard;
