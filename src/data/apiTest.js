import axios from "axios";

let API_KEY = "21b8558be8ae421e8bfe6300b4af6995";
let res = axios
  .get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
  .then((result) => {
    console.log(result.data);
    console.log(result.data.results.length);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("res", res, "\n\n\n");
