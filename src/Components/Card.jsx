import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";
import Swal from 'sweetalert2';




const Card = ({ name, username, id }) => {
  const { contextValue } = useContext(ContextGlobal);
  const { state,  dispatch } = contextValue;

  const addFav = () => {
     // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "ADD_FAV", payload: { id, name, username } });
    Swal.fire({
      title: 'Agregado',
      text:`${name} agregado a dentistas favoritos.`,
      icon:'success',
      showConfirmButton: false,
      timer: 2200
    })
  };

  const removeFav = () => {
    dispatch({ type: "REMOVE_FAV", payload: id });
    Swal.fire({
      title: 'Eliminado',
      text:`Dentista ${name} eliminado favoritos.`,
      icon:'error',
      showConfirmButton: false,
      timer: 2200
    })
  };

  const isAlreadyFav = state.favs.some((fav) => fav.id === id);

    
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      
      <Link to={`/dentist/${id}`}>
        <div className="card-image">
          <img src="./images/doctor.jpg" alt="Dentista" />
        </div>

        <div className="card-data">
          <h5>Id: {id}</h5>
          <h5>{name}</h5>
          <h6>{username}</h6>
        </div>
      </Link>

      {isAlreadyFav ? (
        <button onClick={removeFav} className="favButton">
          Eliminar favorito
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          Agregar a favorito
        </button>
      )}
    </div>
  );
};

export default Card;