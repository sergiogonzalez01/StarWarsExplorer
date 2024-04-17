import { useState } from "react";
import { Loader } from "./Loader";

export function ImageCharacter({ src, alt, imgClass }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${imgClass} ${!loaded ? "hidden" : ""}`}
        onLoad={() => setLoaded(true)}
        draggable="false"
      />

      {!loaded ? <Loader className={imgClass} /> : null}
    </>
  );
}
