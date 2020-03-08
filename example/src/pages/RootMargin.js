import React from "react";
import ReactLazy from "react-laz-y";

const Card = React.lazy(() => import("../components/MediaCard"));

const RootMargin = () => {
  return (
    <div id="lazy-wrapper">
      <ReactLazy rootMargin="800px">
        <div id="lazy-inner-wrapper">
          <Card />
        </div>
      </ReactLazy>
    </div>
  );
};

export { RootMargin };
