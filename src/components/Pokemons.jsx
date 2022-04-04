import { Pokemon } from "./Pokemon";

function Pokemons(props) {
  const { pokemons = [] } = props;

  if (!pokemons.length) {
    return <h4 className="pokemons_error">Nothing found</h4>;
  }

  return (
    <div className="pokemons">
      {pokemons.map((pokemon, id) => (
        <Pokemon key={id} {...pokemon} />
      ))}
    </div>
  );
}

export { Pokemons };
