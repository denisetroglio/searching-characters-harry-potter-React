import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const listElements = props.list.map((list, index) => {
    return (
      <li key={index} className='list'>
        <CharacterCard list={list}/>
      </li>
    );
  });
  return (
    <section className='section'>
      <ul className='list_characters'>
          {listElements}
      </ul>
    </section>
  );
}

export default CharacterList;
