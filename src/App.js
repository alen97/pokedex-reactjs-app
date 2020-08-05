import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
// import { faQuestion } from '@fortawesome/free-solid-svg-icons'
// import Fade from 'react-reveal/Fade'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


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

  ChevronCircleLeft: {
    marginLeft: 35,
    [theme.breakpoints.only('md')]: {
      marginLeft: 30,
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: 25,
    },
    [theme.breakpoints.only('xs')]: {
      marginLeft: 15,
    },
  },

  ChevronCircleRight: {
    marginRight: 35,
    [theme.breakpoints.only('md')]: {
      marginRight: 30,
    },
    [theme.breakpoints.only('sm')]: {
      marginRight: 20,
    },
    [theme.breakpoints.only('xs')]: {
      marginRight: 15,
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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    fetchPokemonSeleccionadoDetalle(indexActual);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick(event) {
    const id = event.target.id;
    console.log(id);
  };

  const [pokemonNombre1, setPokemonNombre1] = useState("");
  const [pokemonImagen1, setPokemonImagen1] = useState("");
  const [pokemonNombre2, setPokemonNombre2] = useState("");
  const [pokemonImagen2, setPokemonImagen2] = useState("");
  const [pokemonNombre3, setPokemonNombre3] = useState("");
  const [pokemonImagen3, setPokemonImagen3] = useState("");
  const [pokemonNombre4, setPokemonNombre4] = useState("");
  const [pokemonImagen4, setPokemonImagen4] = useState("");
  const [pokemonNombre5, setPokemonNombre5] = useState("");
  const [pokemonImagen5, setPokemonImagen5] = useState("");

  const [indexActual, setIndexActual] = useState(1);

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

  const [pokemonDetalleNombre, setPokemonDetalleNombre] = useState("");
  const [pokemonDetalleImagen, setPokemonDetalleImagen] = useState("");
  const [pokemonDetalleTipo1, setPokemonDetalleTipo1] = useState("");
  const [pokemonDetalleTipo2, setPokemonDetalleTipo2] = useState("");
  const [pokemonDetalleAltura, setPokemonDetalleAltura] = useState(0,0);
  const [pokemonDetallePeso, setPokemonDetallePeso] = useState(0);

  // const BASE_URL = 'https://pokeapi.co/api/v2'
  // const POKEMON_NAME = BASE_URL+'/pokemon'
  // const POKEMON_HABILIDADES = BASE_URL+'/abilities'

  // useEffect(() => {

  // fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
  // .then(response => response.json())
  // .then(pokemones => setPokemones(pokemones))

  // },[]);


  useEffect(() => {

    fetchPokemonInfo();

  }, [indexActual]);


  function fetchPokemonInfo() {

    // PRIMERO DE LA PAGINA
    fetch('https://pokeapi.co/api/v2/pokemon/' + indexActual)
      .then(response => response.json())
      .then(pokemon => setPokemonNombre1(pokemon.name))
    fetch('https://pokeapi.co/api/v2/pokemon/' + indexActual)
      .then(response => response.json())
      .then(pokemon => setPokemonImagen1(pokemon.sprites.front_default))

    fetch('https://pokeapi.co/api/v2/pokemon/' + (indexActual + 1))
      .then(response => response.json())
      .then(pokemon => setPokemonNombre2(pokemon.name))
    fetch('https://pokeapi.co/api/v2/pokemon/' + (indexActual + 1))
      .then(response => response.json())
      .then(pokemon => setPokemonImagen2(pokemon.sprites.front_default))

    fetch('https://pokeapi.co/api/v2/pokemon/' + (indexActual + 2))
      .then(response => response.json())
      .then(pokemon => setPokemonNombre3(pokemon.name))
    fetch('https://pokeapi.co/api/v2/pokemon/' + (indexActual + 2))
      .then(response => response.json())
      .then(pokemon => setPokemonImagen3(pokemon.sprites.front_default))

    fetch('https://pokeapi.co/api/v2/pokemon/' + (indexActual + 3))
      .then(response => response.json())
      .then(pokemon => setPokemonNombre4(pokemon.name))
    fetch('https://pokeapi.co/api/v2/pokemon/' + (indexActual + 3))
      .then(response => response.json())
      .then(pokemon => setPokemonImagen4(pokemon.sprites.front_default))

    fetch('https://pokeapi.co/api/v2/pokemon/' + (indexActual + 4))
      .then(response => response.json())
      .then(pokemon => setPokemonNombre5(pokemon.name))
    fetch('https://pokeapi.co/api/v2/pokemon/' + (indexActual + 4))
      .then(response => response.json())
      .then(pokemon => setPokemonImagen5(pokemon.sprites.front_default))

  }

  function fetchPokemonSeleccionadoDetalle(indexSeleccionado) {

    // PRIMERO DE LA PAGINA
    fetch('https://pokeapi.co/api/v2/pokemon/' + indexSeleccionado)
      .then(response => response.json())
      .then(pokemon => setPokemonDetalleNombre(pokemon.name))
    fetch('https://pokeapi.co/api/v2/pokemon/' + indexSeleccionado)
      .then(response => response.json())
      .then(pokemon => setPokemonDetalleImagen(pokemon.sprites.front_default))
    fetch('https://pokeapi.co/api/v2/pokemon/' + indexSeleccionado)
      .then(response => response.json())
      .then(pokemon => setPokemonDetalleTipo1(pokemon.types[0].type.name))
    fetch('https://pokeapi.co/api/v2/pokemon/' + indexSeleccionado)
      .then(response => response.json())
      .then(pokemon => pokemon.types[1] === undefined ? setPokemonDetalleTipo2(undefined): setPokemonDetalleTipo2(pokemon.types[1].type.name))
    fetch('https://pokeapi.co/api/v2/pokemon/' + indexSeleccionado)
      .then(response => response.json())
      .then(pokemon => setPokemonDetalleAltura((parseFloat(pokemon.height) * parseFloat(0.10)).toFixed(1)))
    fetch('https://pokeapi.co/api/v2/pokemon/' + indexSeleccionado)
      .then(response => response.json())
      .then(pokemon => setPokemonDetallePeso(parseInt(pokemon.weight)))

  }

  function aumentarIndex() {
    if(indexActual <= 649)
    setIndexActual((indexActual + 5));
  }

  function disminuirIndex() {
    if (indexActual > 1) {
      setIndexActual((indexActual - 5));
    }
  }

  function SimpleDialog(props) {
    const { id, open } = props;

    const handleClose = () => {
      setOpen(false);
      console.log(id);
    };

    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title" style={{ alignSelf: "center" }}>
          {
            // id === 0 ? pokemonNombre1
            //   :
            //   id === 1 ? pokemonNombre2
            //     :
            //     id === 2 ? pokemonNombre3
            //       :
            //       id === 3 ? pokemonNombre4
            //         :
            //         pokemonNombre5
            pokemonDetalleNombre
          }
        </DialogTitle>
        <img src={

          // id === 0 ? pokemonImagen1
          //   :
          //   id === 1 ? pokemonImagen2
          //     :
          //     id === 2 ? pokemonImagen3
          //       :
          //       id === 3 ? pokemonImagen4
          //         :
          //         pokemonImagen5
          pokemonDetalleImagen

        } alt="" width="120px" heigth="120px" style={{ alignSelf: "center" }} />

        <Grid container justify="center">
          <Grid item xs={pokemonDetalleTipo2 != null ? 6 : 12}>
            <Typography style={{ textAlign: "center" }}>
              {pokemonDetalleTipo1}
            </Typography>
          </Grid>
          {
            pokemonDetalleTipo2 !== undefined &&

            <Grid item xs={6}>
              <Typography style={{ textAlign: "center" }}>
                {pokemonDetalleTipo2}
              </Typography>
            </Grid>
          }

        </Grid>

        <span>&nbsp;&nbsp;</span>

        <Grid container justify="center">
          <Grid item xs={6}>
            <Typography style={{ textAlign: "center" }}>
              {pokemonDetalleAltura} m
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ textAlign: "center" }}>
              {pokemonDetallePeso} kg
            </Typography>
          </Grid>
        </Grid>

        <span>&nbsp;</span>

      </Dialog >
    );
  }

  function CapitalizeFirstLetter(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
  }

  return (


    <div style={{ backgroundColor: "#2B303A" }}>

      <React.Fragment>
        <Grid container justify="center" alignItems="center" style={screenWidth < 800 ? { marginTop: 0, marginBottom: 0 } : { marginTop: 40, marginBottom: 40 }}>
          <Grid item xs={(screenWidth >= 1366) ? 4 : (screenWidth < 1366 && screenWidth > 850) ? 6 : 12}>
            <Grid container justify="center">
              <Grid item xs>
                <AppBar position="static" style={{ justify: "space-between", background: "#CF2F2F", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                  <Toolbar style={{ alignSelf: "center", alignItems: "space-between" }}>
                    <Typography style={{ font: "Roboto", fontSize: 22 }}>
                      POKEDEX
                    </Typography>

                    {/* <FontAwesomeIcon icon={faQuestion} ></FontAwesomeIcon> */}

                  </Toolbar>
                </AppBar>
              </Grid>
            </Grid>

            <Grid container justify="center">
              <Grid item xs style={{ backgroundColor: "#BAC1B8", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>

                {pokemones.map((pokemon, index) => (
                  <p style={index !== 2 ? { textAlign: "center" } : { textAlign: "space-between" }}>

                    {index !== 2 &&
                      <Grid container justify="center">

                        <ButtonBase
                          className={classes.ButtonPokemon}
                          id="unique-id"
                          onClick={() => handleClickOpen()}
                          style={{ font: "Roboto", borderRadius: 10 }}>

                          <Grid item xs>
                            {/* <Fade top> */}
                            <img src={

                              index === 0 ? pokemonImagen1 : index === 1 ? pokemonImagen2 : index === 2 ? pokemonImagen3 : index === 3 ? pokemonImagen4 : pokemonImagen5

                            } alt="" width="120px" heigth="120px" style={{ marginTop: 10 }} />
                            {/* </Fade> */}
                            <p style={{ marginTop: -17 }}>{

                              index === 0 ? CapitalizeFirstLetter(pokemonNombre1)
                                :
                                index === 1 ? CapitalizeFirstLetter(pokemonNombre2)
                                  :
                                  index === 2 ? CapitalizeFirstLetter(pokemonNombre3)
                                    :
                                    index === 3 ? CapitalizeFirstLetter(pokemonNombre4)
                                      :
                                      CapitalizeFirstLetter(pokemonNombre5)

                            }</p>

                          </Grid>
                        </ButtonBase>
                        <SimpleDialog open={open} onClose={handleClose} index={index} />

                      </Grid>

                    }

                    {index === 2 &&

                      <Grid container justify="space-between">

                        <FontAwesomeIcon
                          icon={faChevronCircleLeft}
                          onClick={disminuirIndex}
                          className={classes.ChevronCircleLeft}
                          size="5x"
                          color="#2B303A"
                          style={{ marginTop: 25, textShadow: "2px 2px", cursor: "pointer" }}>

                        </FontAwesomeIcon>

                        <ButtonBase
                          className={classes.ButtonPokemon}
                          id="unique-id"
                          onClick={() => handleClickOpen()}
                          style={{ font: "Roboto", borderRadius: 10 }}>

                          <Grid item xs>
                            {/* <Fade top> */}
                            <img src={pokemonImagen3} alt="" width="120px" heigth="120px" style={{ marginTop: 10 }} />
                            {/* </Fade> */}
                            <p style={{ marginTop: -17 }}>{CapitalizeFirstLetter(pokemonNombre3)}</p>

                          </Grid>
                        </ButtonBase>
                        <SimpleDialog open={open} onClose={handleClose} index={index} />

                        <FontAwesomeIcon
                          icon={faChevronCircleRight}
                          onClick={aumentarIndex}
                          className={classes.ChevronCircleRight}
                          size="5x"
                          color="#2B303A"
                          style={{ marginTop: 25, cursor: "pointer" }}>
                        </FontAwesomeIcon>

                      </Grid>
                    }


                  </p>
                ))}

              </Grid>

            </Grid>

          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default App;