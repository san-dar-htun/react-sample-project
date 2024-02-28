import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const api_key = "272aeaec774c90c227d2db590f0c215e";
