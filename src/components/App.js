import { useState, useEffect } from "react";
import "../styles/App.css";
import getApiData from "../services/Api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";


function App() {
  /*Pintar personajes*/
  const [list, setList] = useState([]);

  /*Añadir personajes*/
  const [image, setImage] = useState("");
  const [FilterName, setFilterName] = useState("");
  const [FilterHouse, setFilterHouse] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    getApiData().then((listData) => {
      setList(listData); //->guardar en la VE
    });
  }, []);

  /*modifica la VE*/
const handleFilterName = (data)=>{
  setFilterName(data);
};

const filteredCharacters = list.filter( (list)=>{
return list.name.toLowerCase().includes(FilterName.toLowerCase());
});


  return (
    <main className='main'>
      <h1 className='title'>Harry Potter</h1>

      {/* filtrar personajes por NAME */}
         {/* filtrar por HOUSE */}

         {/* Componnte que unifica todos los filtros */}
         <Filters handleFilterName={handleFilterName}/> 

      {/* pintar personajes */}
      <CharacterList list={filteredCharacters} />
    </main>
  );
}

export default App;
