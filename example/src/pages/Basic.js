import React from "react";
import ReactLazy from "react-laz-y";

const Card = React.lazy(() => import("../components/MediaCard"));

const Basic = () => {
  return (
    <div id="lazy-wrapper">
      <ReactLazy>
        <div id="lazy-inner-wrapper">
          <Card />
        </div>
      </ReactLazy>
    </div>
  );
};

export { Basic };
