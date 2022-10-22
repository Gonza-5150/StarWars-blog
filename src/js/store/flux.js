const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      planets: [],
      vehicles: [],
      characters: [],
      favorites: []
    },
    actions: {

      addFav: (item)=> {
        let aux = getStore().favorites
        aux.push(item)
        setStore({ favorites: aux });

      },

      delleteFav: (index)=> {
        let aux = getStore().favorites
        let x = aux.filter((element,i)=> i!=index)
        setStore({ favorites: x });

      },


      fetchCharacters: async () => {
        await fetch("https://3000-gonza5150-starwarsbacke-7m2cpmt7b78.ws-us72.gitpod.io/people/")
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .then( (data) => {

              setStore({ characters: data });
          })
          .catch((error) => console.log("Error en la solicitud de personajes"));
      },
      fetchPlanets: async () => {
        await fetch("https://3000-gonza5150-starwarsbacke-7m2cpmt7b78.ws-us72.gitpod.io/planets")
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .then( (data) => {
            setStore({ planets: data });
        })
        .catch((error) => console.log("Error en la solicitud de planetas"));
    },
      fetchVehicles: async() => {
        await fetch("https://3000-gonza5150-starwarsbacke-7m2cpmt7b78.ws-us72.gitpod.io/vehicles/")
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .then( (data) => {
            setStore({ vehicles: data });
        })
        .catch((error) => console.log("Error en la solicitud de vehiculos"));
    },

    eachPlanet: (uid) => {
      fetch("https://3000-gonza5150-starwarsbacke-7m2cpmt7b78.ws-us72.gitpod.io/planets/" + uid)
        .then((resp) => resp.json())
        .then((resp) =>
          setStore({ planetEach: resp })
        )
        .catch((err) => console.error(err));
    },

    eachCharacter: (uid) => {
      fetch("https://3000-gonza5150-starwarsbacke-7m2cpmt7b78.ws-us72.gitpod.io/people/" + uid)
        .then((resp) => resp.json())
        .then((resp) =>
          setStore({ characterEach: resp })
        )
        .catch((err) => console.error(err));
    },

    eachVehicle: (uid) => {
      fetch("https://3000-gonza5150-starwarsbacke-7m2cpmt7b78.ws-us72.gitpod.io/vehicles/" + uid)
        .then((resp) => resp.json())
        .then((resp) =>
          setStore({ vehicleEach: resp })
        )
        .catch((err) => console.error(err));
    },

    syncTokenFromSessionStore: () => {
      const token = sessionStorage.getItem("token");
      console.log("Aplication loaded, synching the session storage token")
      if (token && token != "" && token != undefined) setStore({ token: token });
    },

    logout: () => {
      sessionStorage.removeItem("token");
      console.log("Login out")
      setStore({ token: null });
    },


    login: async (email, password) => {
      const opts = {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      };
      try {
        const resp = await fetch("https://3000-gonza5150-starwarsbacke-br5uq72f36w.ws-us72.gitpod.io/token", opts)
        if (resp.status !== 200) {
          alert("Sorry, it was an error!!!");
          return false;
        }

        const data = await resp.json();
        console.log("from the back", data);
        sessionStorage.setItem("token", data.acces_token);
        console.log(data)
        setStore({ token: data.acces_token });
        return true;
      }
      catch (error) {
        console.error("There has been an error")
      }
    },

    getMessage: () => {
      const store = getStore();
      const opts = {
        headers: {
          "Authorization": "Bearer" + store.token
        }
      }

      // fetching data from the backend
      fetch("https://3001-gonza5150-flaskjwt-sntdmlw1imh.ws-us71.gitpod.io/api/hello", opts)
        .then(resp => resp.json())
        .then(data => setStore({ message: data.message }))
        .catch(error => console.log("Error loading message from backend", error))

    },


    },
  };
};

export default getState;
