import React from "react";

function LoadMore({ next }) {
  return (
    <div className="button_container">
      <a type="button" onClick={next} className="more_btn" id="more">
        More...
      </a>
    </div>
  );
}

export { LoadMore };
