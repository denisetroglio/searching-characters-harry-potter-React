import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import hogwarts from "../images/hogwarts.jpg";
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

  /*Imagen*/
  const [image, SetImage] = useState("");

  useEffect(() => {
    getApiData(FilterHouse).then((listData) => {
      setList(listData); //->guardar en la VE
    });
  }, [FilterHouse]);

  /*Función manejadora de los filtros-modifica la VE*/
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "xxx") {
      return "No hay ningún personaje que coincida con la palabra XXX";
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    }
  };

  const filteredCharacters = list.filter((list) => {
    return list.name.toLowerCase().includes(FilterName.toLowerCase());
  });
  /*Sustituir imagen vazia*/
  const handleImage = (img) => {
    if (img === "") {
      SetImage(`http://hp-api.herokuapp.com/images/${hogwarts}`);
    }
  };

  const renderCharacterDetail = (props) => {
    const routeName = props.match.params.characterName;

    const findCharacter = list.find(
      (character) => character.name === routeName
    );
    return <CharacterDetail character={findCharacter} />;
  };

  return (
    <main className='main'>
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
          />

          {/* pintar personajes */}
          <CharacterList
            list={filteredCharacters}
            handleImage={handleImage}
            image={image}
          />
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
