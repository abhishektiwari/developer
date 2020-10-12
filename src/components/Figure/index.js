import React from "react";
import classnames from "classnames";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Figure({ src, caption, className }) {
  let figureClasses = classnames("figure", className);
  return (
    <figure className={figureClasses}>
      <Zoom>
        <img src={src} alt={caption} />
      </Zoom>
      <figcaption className="figure-caption">{caption}</figcaption>
    </figure>
  );
}

export default Figure;
