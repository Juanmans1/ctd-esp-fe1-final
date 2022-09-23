
import {
  useDispatch
} from "react-redux";
import { FC, useEffect } from "react";
import "./grilla-personajes.css";
import { fetchCharactersThunk } from "../../actions/charactersActions";
import { useSelector } from "../../store";
import Character from "../../types/character.types";
import CharacterCard from "./CharacterCard";
/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * @author Mansilla Quintana Juan Manuel
 *
 * @returns un JSX element
 */

const CharactersGrid: FC = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(
      fetchCharactersThunk("https://rickandmortyapi.com/api/character/")
    );
  }, []);

  if (status === "LOADING") return <div>Cargando personajes...</div>;
  if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
  if (!data || data?.results?.length === 0 || data.error?.length >= 1)
    return <>No hay personajes con ese nombre</>;

  return (
    <div className="grilla-personajes">
      {data?.results?.map((character: Character) => {
        return (
          <CharacterCard
            key={"character_" + character.id}
            characterData={character}
          />
        );
      })}
    </div>
  );
};

export default CharactersGrid;
 