import { useState, UseEffect, useEffect } from "react";
import "../styles/App.css";
import getApiData from "../services/Api";
import CharacterList from "./CharacterList";

function App() {
  const [list, setList] = useState("");

  /*Añadir personajes*/
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    getApiData().then((listData) => {
      setList(listData); //->guardar en la VE
    });
  }, []);

  return (
    <main className='main'>
      <h1 className='title'>Harry Potter</h1>

      {/* filtrar personajes */}
      <form className='new_character'>
        <h2 className='character_title'>Busque un personaje de la serie:</h2>
        <input
          className='character'
          type='text'
          name='name'
          id='name'
          placeholder='Harry Potter'
          /*onChange={handleChangeName}*/
          value={name}
        />
        <label className='form_home' htmlFor='home'>
          <h2 className='homeTitle'>Selecciona la casa:</h2>
        </label>
        <select
          className='form_home_text'
          name='home'
          id='home'
          /*onChange={handleChange}*/
          /*value={props.filterGender}*/
        >
          <option value='gryffindor'>Gryffindor</option>
          <option value='hufflepuff'>Hufflepuff</option>
          <option value='ravenclaw'>Ravenclaw</option>
          <option value='slytherin'>Slytherin</option>
        </select>
      </form>

      {/* pintar personajes */}
      <CharacterList list={list} />
    </main>
  );
}

export default App;
