import React from "react";
import avatar from "../../../assets/default-avatar.svg";
export function Person({ id, name, nickName, images }) {
  const img = images?.[0]?.small?.url ?? avatar; //optional chaining
  return (
    <div>
      <h2>
        id: {id} Name: {name}
      </h2>
      <h3> {nickName || "SHakeAndbaKe"} </h3>
      <img src={img} alt={name} style={{ width: "200px" }} />
    </div>
  );
}
