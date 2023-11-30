import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import Swal from 'sweetalert2';

const Favs = () => {
  const { contextValue } = useContext(ContextGlobal);
  const { state, dispatch } = contextValue;

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

  const clearAllFavs = () => {
    dispatch({ type: "CLEAR_FAVS" });

    Swal.fire({
      title: 'Favoritos eliminados',
      text: 'Todos los favoritos han sido eliminados.',
      icon: 'error',
      showConfirmButton: false,
      timer: 2200
    });
  };

  return (

    <div className={state.theme} id="fav-container">
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((dentista) => (
          <Card
            key={dentista.id}
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
          />
        ))}
      </div>
      <button className="favButton" onClick={clearAllFavs}>Eliminar todos</button>
    </div>
  );
};

export default Favs;