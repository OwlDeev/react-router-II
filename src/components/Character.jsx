import React from "react";
import { useParams } from "react-router-dom";
import "../css/character.css";
import { useState, useEffect } from "react";
const axios = require("axios").default;

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Character() {
  const [pokemon, setPokemon] = useState("");
  const { name } = useParams();

  useEffect(() => {
    async function getPokemon() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + name
        );
        const listAllPokemon = response.data;
        setPokemon(listAllPokemon);
      } catch (error) {
        console.error(error);
      }
    }
    getPokemon();
  }, []);

  function colorFondo(colorType) {
    switch (colorType) {
      case "normal":
        return "#A8A77A";

      case "water":
        return "#6390F0";

      case "fire":
        return "#EE8130";

      case "electric":
        return "#F7D02C";

      case "grass":
        return "#7AC74C";

      case "ice":
        return "#96D9D6";

      case "fighting":
        return "#C22E28";

      case "poison":
        return "#A33EA1";

      case "ground":
        return "#E2BF65";

      case "flying":
        return "#A98FF3";

      case "psychic":
        return "#F95587";

      case "bug":
        return "#A6B91A";

      case "rock":
        return "#B6A136";

      case "ghost":
        return "#735797";

      case "dragon":
        return "#6F35FC";

      case "dark":
        return "#705746";

      case "steel":
        return "#B7B7CE";

      case "fairy":
        return "#D685AD";
    }
  }

  return (
    <div className="characterMain">
      {pokemon !== "" ? (
        <>
          <div className="divImageType">
            <div className="imageCharacter">
              <img
                className="imageCharacter"
                src={pokemon.sprites.front_default}
              ></img>
            </div>
            <div className="typeCharacter">
              <h1 className="titleName">{pokemon.name}</h1>
              <h2
                className="titleType"
                style={{
                  backgroundColor: colorFondo(pokemon.types[0].type.name),
                }}
              >
                {pokemon.types[0].type.name}
              </h2>
            </div>
          </div>
          <TableContainer
            component={Paper}
            style={{
              backgroundColor: colorFondo(pokemon.types[0].type.name),
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Hp</TableCell>
                  <TableCell align="center">Attack</TableCell>
                  <TableCell align="center">Defense</TableCell>
                  <TableCell align="center">Special-Attack</TableCell>
                  <TableCell align="center">Special-Defense</TableCell>
                  <TableCell align="center">Speed</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  key={pokemon.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    {pokemon.stats[0].base_stat}
                  </TableCell>
                  <TableCell align="center">
                    {pokemon.stats[1].base_stat}
                  </TableCell>
                  <TableCell align="center">
                    {pokemon.stats[2].base_stat}
                  </TableCell>
                  <TableCell align="center">
                    {pokemon.stats[3].base_stat}
                  </TableCell>
                  <TableCell align="center">
                    {pokemon.stats[4].base_stat}
                  </TableCell>
                  <TableCell align="center">
                    {pokemon.stats[5].base_stat}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        "not"
      )}
    </div>
  );
}

export default Character;
