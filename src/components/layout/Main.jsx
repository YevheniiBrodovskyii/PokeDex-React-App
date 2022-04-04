import { useState, useEffect } from "react";

import { Preloader } from "../Preloader";
import { Pokemons } from "../Pokemons";
import { LoadMore } from "../LoadMore";

function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonsPerPage] = useState(20);
  const [page, setPage] = useState(1);

  function getPokemons(pokemonOffset) {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pokemonsPerPage}&offset=${pokemonOffset}`
    )
      .then((responce) => responce.json())
      .then((data) => {
        data.results && setPokemons(data.results);
        setLoading(false);
      });
  }

  useEffect(() => {
    const offset = page * pokemonsPerPage - pokemonsPerPage;

    getPokemons(offset);
  }, [page]);

  return (
    <main className="container content">
      {loading ? <Preloader /> : <Pokemons pokemons={pokemons} />}
      <LoadMore next={() => setPage((p) => p + 1)} />
    </main>
  );
}

export { Main };
