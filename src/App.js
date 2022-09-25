import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import Navigation from "./Navigation";
import { getSuperheroes } from "./apis/request/superheroes";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [superHeroes, setSuperheroes] = useState([]);
  const [iserror, setIsError] = useState(null);

  console.log(superHeroes);

  /// axios with useEffect
  useEffect(() => {
    setLoading(true);

    getSuperheroes()
      .then((res) => {
        setSuperheroes(res);
      })
      .catch((err) => {
        setIsError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  // axios
  if (loading) return "loading....";

  return (
    <>
      <Navigation superHeroes={superHeroes} />
    </>
  );
}

export default App;
