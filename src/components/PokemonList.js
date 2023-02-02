import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonListItem from "./PokemonListItem";

export function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [loading, setLoading] = useState(true);

  const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonList(data.results);
      // setLoading(false);
    }
    fetchPokemon();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const filteredPokemon = pokemonList.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  //   if (loading) return <LoadingScreen />;

  return (
    <>
      <div className="container">
        <Link className="btn btn-primary position-relative w-25 mt-5" to="/">
          Back
        </Link>
        <div className="row text-center">
          <div className="col-lg-12">
            <h1 className="text-primary fw-bold pt-5">POKEMON DATA</h1>
            <p className="text-white">Choose your favourite pokemon</p>
            <input
              className="input input-group w-50 text-center"
              type="text"
              aria-label="search"
              placeholder="What pokemon do you want?"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            {filteredPokemon.map((pokemon, id) => {
              return <PokemonListItem pokemon={pokemon} key={id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
