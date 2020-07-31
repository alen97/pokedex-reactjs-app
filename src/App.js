import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

function App() {

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

  return (
    
    <React.Fragment>
      <Grid container justify="center" alignItems="center" style={{ marginTop: 50, marginBottom: 50 }}>
        <Grid item xs={(window.innerWidth >= 1366) ? 4 : (window.innerWidth < 1366 && window.innerWidth > 800) ? 6 : 10}>

          <Grid container justify="center">
            <Grid item xs>
              <AppBar position="static">
                <Toolbar style={{ alignSelf: "center" }}>
                  <Typography>
                    POKEDEX
                  </Typography>
                </Toolbar>
              </AppBar>
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item xs style={{ backgroundColor: "gray" }}>
           
              {pokemones.map((pokemon) => (
                <p style={{ textAlign: "center" }}>
                  <ButtonBase style={{backgroundColor: "white", height:"150px", width: "150px"}}>{pokemon.nombre}</ButtonBase>
                </p>
              ))}

            </Grid>
            
          </Grid>

        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
