import React from "react";
import { useQuery } from "react-query";
import { getSuperheroes } from "../../apis/request/superheroes";
import { fetchFriends } from "../../apis/request/SuperHeroesParallel";
import axios from "axios";

export default function ParallelQueries() {
  const { data: superheroes } = useQuery("super-heroes", () =>
    getSuperheroes()
  );
  const { data: friends } = useQuery("friends", fetchFriends);

  return <div>ParallelQueries</div>;
}
