import { useQuery } from "react-query";
import { getSuperhero } from "../apis/request/Superhero";

export const useSuperHero = (heroId) => {
  return useQuery(["super-hero", heroId], () => getSuperhero(heroId));
};
