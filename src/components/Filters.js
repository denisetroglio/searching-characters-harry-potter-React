import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

const Filters = (props) => {
  return (
    <form className='new_character'>
      <h2 className='character_title'>Busque un personaje de la serie:</h2>
      <FilterName
        handleFilter={props.handleFilter}
        FilterName={props.FilterName}
      />

      <h2 className='homeTitle'>Selecciona la casa:</h2>
      <FilterHouse FilterHouse={props.FilterHouse} handleFilter={props.handleFilter}/>
    </form>
  );
};

export default Filters;
