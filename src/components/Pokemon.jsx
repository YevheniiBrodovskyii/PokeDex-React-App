import React from "react";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

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
            {/* {???.map((item, index) => (
              <div key={index}>
                <button onClick={()=> {??? }}>Sraka</button>
              </div>
            ))} */}
          </div>
          <div className="card-content">
            {data.abilities.map((n, index) => (
              <p key={index}>{n.ability.name}</p>
            ))}
          </div>
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
