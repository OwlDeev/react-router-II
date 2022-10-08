import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";
const axios = require("axios").default;
import Button from '@mui/material/Button';

export default function Home() {
  const [pokemones, setAllPokemones] = useState([]);
  const navigate = useNavigate();
  const irAPersonajes = () => {
    const findPokemon = (document.getElementById('combo-box-demo')).value
    navigate(`/character/${findPokemon}`);
  };

  useEffect(() => {
    async function getAllPokemon() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0"
        );
        const listAllPokemon = response.data.results;
        setAllPokemones(listAllPokemon);
        console.log(pokemones);
      } catch (error) {
        console.error(error);
      }
    }
    getAllPokemon();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} className="boxMain">
      <Grid container className="centerAll">
        <Grid item xs={12} className="centerAll">
          <div className="mainHome">
            <h1 style={{color: '#d03056'}}>POKEMON SEARCH</h1>
            <Autocomplete
              getOptionLabel={(pokemon) => pokemon.name}
              noOptionsText = {'No found this pokemon'}
              id="combo-box-demo"
              options={pokemones}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Pokemon" />
              )}
            />
            <Button style={{marginTop: '20px', width:'20%'}} onClick={irAPersonajes} variant="contained">Search</Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
