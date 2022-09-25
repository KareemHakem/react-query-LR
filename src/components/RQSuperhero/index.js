import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHero } from "../../hooks/useSuperHeroData";
const RQSuperhero = () => {
  const { heroId } = useParams();
  const { isLoading, error, isError, data } = useSuperHero(heroId);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (isError) {
    return <div> {error.message} </div>;
  }

  return (
    <div>
      <div>Hero-name</div>
      {data.name} - {data.alterEgo}
    </div>
  );
};

export default RQSuperhero;
