import React, { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { Link } from "react-router-dom";

export default function PokemonListItem({ pokemon }) {
  const { name, url } = pokemon;
  const [data, setData] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-12 fs-2 mt-4">
            <Link to={`/PokemonCard/${name}`}>
              <p>{name.toUpperCase()}</p>
            </Link>

            {pokemonDetail.map((pokemon) => {
              return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

// render(<PokemonListItem />);
