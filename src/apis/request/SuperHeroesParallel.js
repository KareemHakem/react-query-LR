import { axios } from "../axios";

export const fetchFriends = async () => {
  const { data } = await axios.get("friends");
  return data;
};
