import { FC } from "react";
import { useDispatch } from "react-redux";
import { cleanFav } from "../actions/favouritesAction";
import CharacterCard from "../componentes/personajes/CharacterCard";
import { useSelector } from "../store";
import Character from "../types/character.types"
import "../componentes/personajes/grilla-personajes.css";
;

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <Favourites /> ```
 * @author Mansilla Quintana Juan Manuel 
 * 
 * @returns la pagina de favoritos
 */

const Favourites: FC = () => {
  const dispatch = useDispatch();
  const { favoritosMapa } = useSelector((state) => state.favourites)

  /**
   * Función que limpia todo el array de favoritos y lo deja vacío.
   * 
   * @author Mansilla Quintana Juan Manuel
   * 
   */
  const limpiarTodo = () => {
    dispatch(cleanFav());
  }

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={limpiarTodo}>
          LIMPIAR FAVORITOS
        </button>
      </div>
      <div className="grilla-personajes">
        {!favoritosMapa[0] && <div>No hay personajes seleccionados como favoritos</div>}
        {favoritosMapa.map((character: Character) => {
          return (
            <CharacterCard
              key={"character_" + character.id}
              characterData={character}
            />
          );
        })}
        </div>
    </div>
  );
};

export default Favourites;
