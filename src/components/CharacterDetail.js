import {Link} from "react-router-dom";

function CharacterDetail(props) {
  return (
    <>
      <section className='sectionDetails'>
          <Link className="back" to="/">Volver</Link>
          <h2 className="titleDetail">Detalle del personaje</h2>
        <img
          className='card_img'
          src={props.listItem.image}
          alt={`Foto de ${props.listItem.name}`}
        />
        <h4 className='name_Character'>Nombre:{props.listItem.name}</h4>
        <p className='specie'>Especie:{props.listItem.species}</p>
        <p className='gender'>Genero:{props.listItem.gender}</p>
        <p className='alive'>Estatus:{props.listItem.alive}</p>
      </section>
    </>
  );
}

export default CharacterDetail;
