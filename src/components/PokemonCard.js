import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export function PokemonCard() {
  const [pokemon, setPokemon] = useState([]);

  const { name } = useParams();

  const urlSecondary = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    async function fetchDataAlt() {
      const response = await fetch(urlSecondary);
      const data2 = await response.json();
      setPokemon(data2);
    }
    fetchDataAlt();
  }, []);

  return (
    <>
      <div className="pokemon-container text-center p-5">
        <Link className="btn btn-primary position-relative w-25" to="/home">
          Back
        </Link>
        <div className="content text-uppercase text-white mt-5">
          <h1>#{pokemon.order}</h1>
        </div>
        <div className="content text-uppercase text-white">
          <h1>{pokemon.name}</h1>
        </div>
        <div className="content text-uppercase text-white">
          <h1>Weight:{pokemon.weight}kg</h1>
        </div>
        <div className="content text-uppercase text-white">
          <h1>Height:{pokemon.height}</h1>
        </div>
        <div className="content text-uppercase text-dark">
          {pokemon?.sprites?.other?.dream_world?.front_default ? (
            <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
          ) : null}
        </div>
      </div>
    </>
  );
}
