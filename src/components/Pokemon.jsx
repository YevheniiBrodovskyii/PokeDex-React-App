import React from "react";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { PokemonDetails } from "./PokemonDetails";

function Pokemon({ name, url }) {
  const [data, setData] = useState(null);
  const [open, isOpen] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(setData);
  }, [url]);

  const handleMore = (e) => {
    isOpen(true);
    let card = document.getElementById(data.id);
    card.style.display = "none";
  };

  const handleBack = (e) => {
    isOpen(false);
    let card = document.getElementById(data.id);
    card.style.display = "block";
  };

  return (
    <div>
      {data ? (
        <div>
          <div className="card" onClick={handleMore} id={data.id}>
            <div className="animate__animated animate__bounceInUp">
              <div className="card-image">
                <div className="card_click-container">
                  <p className="card_click">click to see more...</p>
                </div>
                <img src={data.sprites.front_default} alt="pokemon_img" />
                <span className="card-title">{name}</span>
              </div>
              <div className="card-content">
                {data.abilities.map((n, index) => (
                  <p key={index}>{n.ability.name}</p>
                ))}
              </div>
            </div>
          </div>
          {open ? (
            <PokemonDetails
              height={data.height}
              weight={data.weight}
              name={name}
              onClick={handleBack}
            />
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div>
          <TailSpin type="Puff" color="purple" height={100} width={100} />
        </div>
      )}
    </div>
  );
}

export { Pokemon };
