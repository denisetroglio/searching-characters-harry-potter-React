const CharacterCard = (props) => {
  return (
    <>
      <img
        className='card_img'
        src={props.listItem.image}
        alt={`Foto de ${props.listItem.name}`}
      />
      <h4 className='name_Character'>{props.listItem.name}</h4>
      <p className='specie'>{props.listItem.species}</p>
    </>
  );
};

export default CharacterCard;
