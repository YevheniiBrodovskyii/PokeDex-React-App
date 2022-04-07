import React from "react";

function PokemonDetails({ height, weight, name, onClick }) {
  return (
    <div className="card">
      <div className="card_more animate__animated animate__flipInX">
        <h3 className="card-title">{name}</h3>
        <h5 className="card_more-title">
          Pokemon growth:<p>{height}</p>
        </h5>
        <h5 className="card_more-title">
          Pokemon weight:<p>{weight}</p>
        </h5>
        <button className="back_btn" onClick={onClick}>
          Back
        </button>
      </div>
    </div>
  );
}

export { PokemonDetails };
