
import "./tarjeta-episodio.css";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * @author Mansilla Quintana Juan Manuel
 * @param {void}
 *
 * @returns un JSX element
 */

 export interface ChapterCardProps {
  name: string;
  airDate: string;
  episodio: string;
}

const ChapterCard = ({name, airDate, episodio}: ChapterCardProps) => {
  return (
    <div className="tarjeta-episodio">
      <h4>{name}</h4>
      <div>
        <span>{episodio}</span>
        <span>Lanzado el: {airDate}</span>
      </div>
    </div>
  );
};

export default ChapterCard;
