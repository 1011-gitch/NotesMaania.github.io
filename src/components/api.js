import axios from "axios";

let url = "https://my-json-server.typicode.com/typicode/demo/db";

export const get_note = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};
export const post_note = async (users) => {
  return await axios.post(url, users);
};
