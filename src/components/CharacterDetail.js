import { Link } from "react-router-dom";
import hogwarts from "../images/hogwarts.jpg";

function CharacterDetail(props) {
  const GetImage = (image) =>{
    if (image === ""){
      return hogwarts;
    } else{
      return props.character.image;
    }
  };
  return (
    <>
      <section className='sectionDetails'>
        <Link className='back' to='/'>
          Volver
        </Link>
        <h2 className='titleDetail'>Detalle del personaje</h2>
        <section className='details_photo'>
          <img
            className='card_img_detail'
            src={GetImage(props.character.image)}
            alt={`Foto de ${props.character.name}`}
          />
        </section>
        <section className='details'>
          <h4 className='name_CharacterDetail'>
            Nombre:{props.character.name}
          </h4>
          <p className='specie_detail'>Especie:{props.character.species}</p>
          <p className='gender_detail'>
            Genero:{props.character.gender === "female" ? "Mujer" : "Hombre"}
          </p>
          <p className='alive_detail'>Estatus: {props.character.alive === true? "Vivo(a)":"Muerto(a)"}</p>
          <p className='alive_detail'>Color Ojos:{props.character.eyeColour}</p>
          <p className='birth_detail'>Nacimiento:{props.character.dateOfBirth}</p>
          <p className='house_detail'>Casa:{props.character.house}</p>
        </section>
      </section>
    </>
  );
}

export default CharacterDetail;
