import { useQuery } from "react-query";
import { getSuperheroes } from "../apis/request/superheroes";

export const useSuperheroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", () => getSuperheroes(), {
    onSuccess,
    onError,
    //     select: (data) => {
    //       const superheroesName = data?.map((hero) => hero.name);
    //       return superheroesName;
    //     },
  });
};
 