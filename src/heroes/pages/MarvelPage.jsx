import React from "react";
import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel comics: </h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
