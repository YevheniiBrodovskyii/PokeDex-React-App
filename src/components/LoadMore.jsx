import React from "react";

function LoadMore(next) {
  return (
    <div className="button_container">
      <a className="waves-effect waves-light btn-large" next={next}>
        More...
      </a>
    </div>
  );
}

export { LoadMore };
