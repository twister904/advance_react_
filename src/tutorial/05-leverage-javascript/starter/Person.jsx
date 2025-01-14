import React from "react";
export function Person({ id, name, nickName, images }) {
  return (
    <div>
      <h2>
        id: {id} Name: {name}
      </h2>
      <h3> {nickName || "SHakeAndbaKe"} </h3>
      {images && (
        <img src={images[0].small.url} alt={name} style={{ width: "200px" }} />
      )}
    </div>
  );
}
