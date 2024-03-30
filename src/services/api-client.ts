import axios, { CanceledError } from "axios";

// https://api.rawg.io/api/platforms?key=YOUR_API_KEY
// we call create method and give it a configuration object
// in this object we set basic url to the url of our backend
export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: { key: "21b8558be8ae421e8bfe6300b4af6995" },
});

export { CanceledError };
