import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ({ publisher }) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} No esta dentro de la DB, no es valido`);
  }

  return heroes.filter((comp) => comp.publisher === publisher);
};
