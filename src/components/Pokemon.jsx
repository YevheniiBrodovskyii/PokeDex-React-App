import { useState, useEffect } from "react";

function Pokemon({ name, url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(setData);
  }, [url]);

  return (
    <div>
      {data ? (
        <div className="card animate__animated animate__bounceInUp">
          <div className="card-image">
            <img src={data.sprites.front_default} />
            <span className="card-title">{name}</span>
          </div>
          <div className="card-content">
            {data.abilities.map((n, index) => (
              <p key={index}>{n.ability.name}</p>
            ))}
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export { Pokemon };
