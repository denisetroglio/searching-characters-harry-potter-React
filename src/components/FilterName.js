function FilterName(props) {
    const handleInput = (ev)=>{
        props.handleFilterName(ev.currentTarget.value)
    }
  return (
    <>
      <input
        className='character'
        type='text'
        name='name'
        id='name'
        placeholder='Harry Potter'
        onChange={handleInput}
      />
    </>
  );
}
export default FilterName;
