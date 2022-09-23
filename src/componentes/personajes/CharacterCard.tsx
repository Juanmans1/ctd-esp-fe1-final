import { FC } from "react";
import { useDispatch } from "react-redux";
import { selectedCharacterAction } from "../../actions/selectedCharacterActions";
import Character from "../../types/character.types";
import FavouriteButton from "./../botones/FavouriteButton";
import "./tarjeta-personaje.css";
import { useNavigate } from "react-router-dom";

export interface CharacterCardProps {
  characterData: Character;
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * @author Mansilla Quintana Juan Manuel
 *
 * @returns un JSX element
 */
const CharacterCard: FC<CharacterCardProps> = ({ characterData }: CharacterCardProps) => {

  const navigation = useNavigate()

  const dispatch = useDispatch();

  /**
   * Al seleccionar un personaje, redirige a la ruta de detalle de ese mismo.
   * 
   * @author Mansilla Quintana Juan Manuel
   */
  const goDetail = () => {
    dispatch(selectedCharacterAction(characterData))
    navigation("/detalle/")
  }

  return (
    <div className="tarjeta-personaje" >
      <img src={characterData.image} alt="Rick Sanchez" onClick={goDetail} style={{cursor: "pointer"}}/>
      <div className="tarjeta-personaje-body">
        <span onClick={goDetail} style={{cursor: "pointer"}}>{characterData.name}</span>
        <FavouriteButton character={characterData} />
      </div>
    </div>
  );
};

export default CharacterCard;
