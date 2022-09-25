import { axios } from "../axios";

export const getSuperhero = async (id) => {
  const { data } = await axios.get(`superheroes/${id}`);

  return data;
};
