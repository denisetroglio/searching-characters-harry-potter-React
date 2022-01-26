import { useState, useEffect } from "react";
import "../styles/App.css";
import getApiData from "../services/Api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  /*Pintar personajes*/
  const [list, setList] = useState([]);

  /*Añadir personajes*/

  const [FilterName, setFilterName] = useState("");
  const [FilterHouse, setFilterHouse] = useState("gryffindor");

  useEffect(() => {
    getApiData(FilterHouse).then((listData) => {
      setList(listData); //->guardar en la VE
    });
  }, [FilterHouse]);

  /*Función manejadora de los filtros-modifica la VE*/
  const handleFilter = (data) => {
    console.log(data);
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    }
  };

  const filteredCharacters = list.filter((list) => {
    return list.name.toLowerCase().includes(FilterName.toLowerCase());
  });

  return (
    <main className='main'>
      <h1 className='title'>Harry Potter</h1>

      {/* filtrar personajes por NAME */}
      {/* filtrar por HOUSE */}

      {/* Componnte que unifica todos los filtros */}
      <Filters
        handleFilter={handleFilter}
        FilterName={FilterName}
        FilterHouse={FilterHouse}
      />

      {/* pintar personajes */}
      <CharacterList list={filteredCharacters} />
    </main>
  );
}

export default App;
