import { FC } from "react";
import { Link } from "react-router-dom";
import "./encabezado.css";

/**
 * Encabezado que contiene los links para navegar entre las páginas
 *
 * Uso: `<Encabezado />`
 * @author Mansilla Quintana Juan Manuel
 * @param {void}
 * @returns {JSX.Element}
 */
const Header: FC = () => {
  return (
    <header>
      <div>
        <div>
          <h2>Examen Final de Frontend IV</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalle">Detalle</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
