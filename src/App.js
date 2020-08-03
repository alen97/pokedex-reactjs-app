import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

export const useStyles = makeStyles(theme => ({
  ButtonPokemon: {
    backgroundColor: "#FFFFFF",
    boxShadow: ' 1 7px 19px 1 rgba(2, 89, 158, 0.12)',
    height: 150,
    width: 150,
    [theme.breakpoints.only('md')]: {
      height: 140,
      width: 140,
    },
    [theme.breakpoints.only('sm')]: {
      height: 130,
      width: 130,
    },
    [theme.breakpoints.only('xs')]: {
      height: 120,
      width: 120,
    },
  },

  /******************
 * - SCROLL - *
 ******************/
  '@global': {
    '*::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
  }

}));

function App() {

  const classes = useStyles("");

  const screenWidth = window.innerWidth;

  // const [allPokemones, setPokemones] = useState({results:['']});
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonNombre, setPokemonNombre] = useState("");
  const [pokemonImagen, setPokemonImagen] = useState("");

  // const [pokemones, setPokemones] = useState({
  //   pokemon: {
  //     id: 0,
  //     nombre: "",
  //     imagen: "",
  //   }
  // })

  // EN el fetch traer los 5 resultados, setearlos en 'pokemones' y mapear pokemones 

  const pokemones = [
    {
      nombre: 'POKEMON 1'
    },
    {
      nombre: 'POKEMON 2'
    },
    {
      nombre: 'POKEMON 3'
    },
    {
      nombre: 'POKEMON 4'
    },
    {
      nombre: 'POKEMON 5'
    }
  ]

  // const BASE_URL = 'https://pokeapi.co/api/v2'
  // const POKEMON_NAME = BASE_URL+'/pokemon'
  // const POKEMON_HABILIDADES = BASE_URL+'/abilities'

  // useEffect(() => {

  // fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
  // .then(response => response.json())
  // .then(pokemones => setPokemones(pokemones))

  // },[]);


  useEffect(() => {

    fetchPokemonInfo(1);

  }, []);

  function fetchPokemonInfo(index) {

    fetch('https://pokeapi.co/api/v2/pokemon/'+index)
    .then(response => response.json())
    .then(pokemon => setPokemonId(pokemon.id))

    fetch('https://pokeapi.co/api/v2/pokemon/'+index)
      .then(response => response.json())
      .then(pokemon => setPokemonNombre(pokemon.name))

    fetch('https://pokeapi.co/api/v2/pokemon/'+index)
      .then(response => response.json())
      .then(pokemon => setPokemonImagen(pokemon.sprites.front_default))
  }

  return (
    <div style={{ backgroundColor: "#2B303A" }}>
      <React.Fragment>
        <Grid container justify="center" alignItems="center" style={screenWidth < 800 ? { marginTop: 0, marginBottom: 0 } : { marginTop: 40, marginBottom: 40 }}>
          <Grid item xs={(screenWidth >= 1366) ? 4 : (screenWidth < 1366 && screenWidth > 850) ? 6 : 12}>

            <Grid container justify="center">
              <Grid item xs>
                <AppBar position="static" style={{ background: "#CF2F2F", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                  <Toolbar style={{ alignSelf: "center" }}>
                    <Typography style={{ font: "Roboto", fontSize: 22 }}>
                      POKEDEX
                  </Typography>
                  </Toolbar>
                </AppBar>
              </Grid>
            </Grid>

            <Grid container justify="center">
              <Grid item xs style={{ backgroundColor: "#BAC1B8", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>

                {/* <Grid container> */}
                {pokemones.map((pokemon) => (
                  <p style={{ textAlign: "center" }}>
                    <ButtonBase className={classes.ButtonPokemon} style={{ font: "Roboto", borderRadius: 10 }}>
                      <Grid item xs>
                        <img src={pokemonImagen} alt={pokemonId} width="120px" heigth="120px" style={{ marginTop: 10 }} />
                        <p style={{ marginTop: -17 }}>{pokemonNombre.charAt(0).toUpperCase() + pokemonNombre.slice(1)}</p>
                      </Grid>

                    </ButtonBase>
                  </p>
                ))}
                {/* </Grid> */}

              </Grid>

            </Grid>

          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default App;
