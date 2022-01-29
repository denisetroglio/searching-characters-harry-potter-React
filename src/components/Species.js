function Species(props) {
  const handleInputSpecie = (ev) => props.handleFilter({
    key: "specie",
    value: ev.currentTarget.value,
  });

  return (
    <>
      <input
        className='specie_input'
        type='text'
        name='specie'
        id='specie'
        placeholder='Specie'
        onChange={handleInputSpecie}
        value={props.Species} /*controlado*/
      />
    </>
  );
}

export default Species;
