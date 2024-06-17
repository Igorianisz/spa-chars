import { heroes } from "../data/heroes";

export const getHeroByName = (name) => {
  console.log("a");
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
