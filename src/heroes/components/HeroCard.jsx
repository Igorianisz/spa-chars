import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col flex">
      <div className="card">
        <div className="row no-gutters">
          <div className="card-body text-center">
            <h5 className="card-text">{superhero}</h5>
          </div>
          <img
            className="card-img-top"
            src={`/assets/heroes/${id}.jpg`}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Nombre alter-ego: {alter_ego}</p>

            <p className="card-text text-muted">
              Primera apareción en: {first_appearance}
            </p>

            {alter_ego !== characters && <p>Otros personajes: {characters}</p>}

            <Link to={`/hero/${id}`}>Ver más...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
