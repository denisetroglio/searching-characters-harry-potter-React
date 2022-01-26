function FilterName(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };
  return (
    <>
      <input
        className='character'
        type='text'
        name='name'
        id='name'
        placeholder='Harry Potter'
        onChange={handleInput}
        value={props.FilterName} /*controlado*/
      />
    </>
  );
}
export default FilterName;
