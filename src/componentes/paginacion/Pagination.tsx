import { FC} from "react";
import { useDispatch } from "react-redux";
import { fetchCharactersThunk } from "../../actions/charactersActions";
import { useSelector } from "../../store";
import "./paginacion.css";
/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 * @author Mansilla Quintana Juan Manuel
 * @returns un JSX element
 */
const Pagination: FC = () => {
  const { data, status } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const goPrev = () => {
    if (data.info.prev !== undefined) {
      dispatch(fetchCharactersThunk(data.info.prev));
    }
  };

  const goNext = () => {
    if (data.info.next !== undefined) {
      dispatch(fetchCharactersThunk(data.info.next));
    }
  };

  return (
    <div className="paginacion">
      <button
        disabled={data?.info?.prev === null || undefined}
        className={"primary"}
        onClick={goPrev}
      >
        Anterior
      </button>
      <button
        disabled={data?.info?.next === null || undefined}
        className={"primary"}
        onClick={goNext}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
