import { axios } from "../axios";

export const getSuperheroes = async () => {
  const { data } = await axios.get("superheroes");

  return data;
};
