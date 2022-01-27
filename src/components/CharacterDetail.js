import { Link } from "react-router-dom";

function CharacterDetail(props) {
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
            src={props.character.image}
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
          <p className='alive_detail'>Estatus: {props.character.alive === "true"? "Vivo(a)":"Muerto(a)"}</p>
          <p className='alive_detail'>Color ojos:{props.character.eyeColour}</p>
        </section>
      </section>
    </>
  );
}

export default CharacterDetail;
