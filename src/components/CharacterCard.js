const CharacterCard = (props) => {
  return (
    <>
      <img
        className='card_img'
        src={props.list.image}
        alt={`Foto de ${props.list.name}`}
      />
      <h4 className='name_Character'>{props.list.name}</h4>
      <p className='specie'>{props.list.species}</p>
    </>
  );
};

export default CharacterCard;
