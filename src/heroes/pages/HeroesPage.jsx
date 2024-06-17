import React, { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroesPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  console.log(heroId);

  const heroData = useMemo(() => getHeroById(heroId), [heroId]);

  const handleBack = () => {
    navigate(-1);
  };

  if (!heroData) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div>
      <div className="row mt-5">
        <div className="col-4">
          <img
            className="img-thumbnail"
            src={`/assets/heroes/${heroData.id}.jpg`}
            alt="Card image cap"
          />
        </div>
        <div className="col-8">
          <h3>{heroData.superhero}</h3>
          <ul>
            <li>Alter ego: {heroData.alter_ego}</li>
            <li>Publisher: {heroData.publisher}</li>
            <li>First appearance: {heroData.first_appearance}</li>
          </ul>
          <hr />
          <h3>Characters</h3>
          <h5>{heroData.characters}</h5>
          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={handleBack}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
