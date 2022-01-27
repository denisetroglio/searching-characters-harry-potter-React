const getApiData = (houseFilter) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${houseFilter}`)
    .then((response) => response.json())
    .then((data) => {
      const dataList = data.map((list) => {
        return {
          image: list.image,
          name: list.name,
          species: list.species,
          gender:list.gender,
          alive:list.alive,
          eyeColour:list.eyeColour,
          dateOfBirth:list.dateOfBirth,
          house:list.house,
        };
      });
      return dataList;
    });
};

export default getApiData;
