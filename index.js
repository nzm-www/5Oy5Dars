import data from "./data.js";
import { createCard } from "./functions.js";

data.forEach((product) => {
  createCard(product);
});
