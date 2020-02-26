import React from "react";
import ReactLazy from "react-laz-y";

const Card = React.lazy(() => import("./MediaCard"));

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

export default Basic;
