const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      vehicles: [],
      characters: [],
    },
    actions: {
      fetchCharacters: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .then( (data) => {
              setStore({ characters: data.results });
          })
          .catch((error) => console.log("Error en la solicitud de personajes"));
      },
      fetchPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .then(async (data) => {
            data.results.forEach(async (planet, index) => {
              // console.log(character.url);
              const { url } = planet;
              const response = await fetch(url);
              const info = await response.json();
              data.results[index].info = info;
              setStore({ planet: data });
            });
          })
          .catch((error) => console.log("Error en la solicitud de planetas"));
      },
      fetchVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .then(async (data) => {
            data.results.forEach(async (Vehicle, index) => {
              // console.log(character.url);
              const { url } = Vehicle;
              const response = await fetch(url);
              const info = await response.json();
              data.results[index].info = info;
              setStore({ Vehicle: data });
            });
          })
          .catch((error) => console.log("Error en la solicitud de vehículo"));
      },
    },
  };
};

export default getState;
