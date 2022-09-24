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
          .then( (data) => {
            setStore({ planets: data.results });
        })
        .catch((error) => console.log("Error en la solicitud de planetas"));
    },
      fetchVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .then( (data) => {
            setStore({ vehicles: data.results });
        })
        .catch((error) => console.log("Error en la solicitud de vehiculos"));
    },
    },
  };
};

export default getState;
