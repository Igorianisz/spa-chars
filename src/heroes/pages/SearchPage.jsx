import React, { useCallback, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";
import { HeroCard } from "../components/HeroCard";
import { heroes } from "../data/heroes";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchData = location.search;

  const { q = "" } = queryString.parse(searchData);

  const { formState, onInputChange } = useForm({ searchText: q });

  const heroData = useMemo(() => getHeroByName(q), [q]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      navigate(`?q=${formState.searchText.trim().toLowerCase()}`);
    },
    [formState.searchText]
  );

  return (
    <>
      <div className="row">
        <div className="col-5">
          <h4>
            Searching <hr />
          </h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ingrese texto de busqueda"
              autoComplete="off"
              name="searchText"
              className="form-control"
              onChange={onInputChange}
              value={formState.searchText}
            />
            <button className="mt-2">Buscar</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados:</h4>
          <hr />

          {q?.length < 1 && (
            <div className="alert alert-primary mt-2">Buscando un heroe...</div>
          )}

          {q != "" && heroData.length < 1 && (
            <div className="alert alert-danger mt-2">Sin resultados {q}</div>
          )}

          {heroData.map((heroe) => (
            <HeroCard {...heroe} id={heroe.id} />
          ))}
        </div>
      </div>
    </>
  );
};
