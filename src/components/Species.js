function Species(props) {
  const handleInputSpecie = (ev) => props.handleFilter({
    key: "specie",
    value: ev.currentTarget.value,
  });

  return (
    <>
      <input
        className='specie'
        type='text'
        name='specie'
        id='specie'
        placeholder='Specie'
        onChange={handleInputSpecie}
        value={props.Specie} /*controlado*/
      />
    </>
  );
}

export default Species;
