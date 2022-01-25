import { useState } from "react";
import "../styles/App.css";
import herryPotter from "../datos/data.json";

function App() {
  const [harry, setHarry] = useState("");

  /*Añadir personajes*/
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");

  return (
    <main className='main'>
      <h1 className='title'>Harry Potter</h1>

      {/* filtrar personajes */}
      <form className='new_character'>
        <h2 className='character_title'>
          Busque un personaje de la serie:
        </h2>
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
          <h2 className="homeTitle">Selecciona la casa:</h2>
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
      <section>
        <ul>
          <li></li>
        </ul>
      </section>
    </main>
  );
}

export default App;
