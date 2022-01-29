import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import getApiData from "../services/Api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";


function App() {
  /*Pintar personajes*/
  const [list, setList] = useState([]);

  /*Filtrar personajes*/
  const [FilterName, setFilterName] = useState("");
  const [FilterHouse, setFilterHouse] =
    useState("gryffindor"); /*valor por defecto*/
  const [Species, setSpecies] = useState("");

  /*llama el fetch*/
  useEffect(() => {
    getApiData(FilterHouse).then((listData) => {
      setList(listData); //->guardar en la VE
    });
  }, [FilterHouse]);

  /*Función manejadora de los filtros-modifica la VE*/
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    } else if (data.key === "specie") {
      setSpecies(data.value);
    }
  };

  const filteredCharacters = list.filter((list) => {
    return list.name
      .toLowerCase()
      .includes(FilterName.toLowerCase())})
      .filter((list) => {
        return list.species.toLowerCase().includes(Species.toLowerCase()); 
  });

  const renderCharacterDetail = (props) => {
    const routeName = props.match.params.characterName;

    const findCharacter = list.find(
      (character) => character.name === routeName
    );
    if (findCharacter === undefined) {
      return "personaje no encontrado";
    } else {
      return <CharacterDetail character={findCharacter} />;
    }
  };
  /*Botón de deletar búsqueda*/
  const handleDelete = () => {
    setFilterName("");
    setFilterHouse("gryffindor");
    setSpecies("");
  };

  return (
    <main className='main'>
      <span className='copyright'>ⒸDenise Overbeck Troglio</span>

      <h1 className='title'>Harry Potter</h1>

      <Switch>
        <Route path='/' exact>
          {/* filtrar personajes por NAME */}
          {/* filtrar por HOUSE */}

          {/* Componnte que unifica todos los filtros */}
          <Filters
            handleFilter={handleFilter}
            FilterName={FilterName}
            FilterHouse={FilterHouse}
            Species={Species}
          />
          <div className='btn_reset'>
            <input
              className='delete'
              type='reset'
              value='limpiar búsqueda'
              onClick={handleDelete}
            />
          </div>

          {/* pintar personajes */}
          <CharacterList list={filteredCharacters} />
        </Route>

        <Route
          path='/character/:characterName'
          render={renderCharacterDetail}
        />
      </Switch>
    </main>
  );
}

export default App;
