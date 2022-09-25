import React from "react";

export default function SuperHeroes({ superHeroes }) {
  return (
    <>
      <h1>Super Heroes Page</h1>
      {superHeroes.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
}
