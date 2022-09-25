import React from "react";
import { useSuperheroesData } from "../../hooks/useSuperheroesData";
import { Link } from "react-router-dom";

export default function RQSuperHeroes() {
  /// react Query
  const onSuccess = (data) => {
    console.log("perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("perform side effect after encountering error", error);
  };

  const { data, error, isError, isLoading, isFetching, refetch } =
    useSuperheroesData(onSuccess, onError);

  if ((isLoading, isFetching))
    return "loading........................................";
  if (isError) return <h2>{error.message}</h2>;

  console.log({ isLoading, isFetching });

  return (
    <div>
      <h1>RQSuperHeroes</h1>
      <button onClick={refetch}>Fetch Heros</button>
      {data?.map((hero) => (
        <h2 key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </h2>
      ))}
      {/* {data.map((heroName) => {
        return <div key={heroName}> {heroName} </div>;
      })} */}
    </div>
  );
}
