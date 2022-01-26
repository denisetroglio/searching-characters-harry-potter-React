import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const listElements = props.list.map((item, index) => {
    return (
      <li key={index} className='items_li'>
        <CharacterCard listItem={item} />
      </li>
    );
  });
  return (
    <section className='section'>
      <ul className='list_characters'>{listElements}</ul>
    </section>
  );
}

export default CharacterList;
