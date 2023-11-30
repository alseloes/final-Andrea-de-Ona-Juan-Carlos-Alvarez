import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {ContextGlobal} from '../Components/utils/global.context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Detail = () => {
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { contextValue } = useContext(ContextGlobal);
  const { state } = contextValue;
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error('Error al cargar los detalles del dentista:', error));
  }, [id]);

 
  return (
    <div className={state.theme} id='detail-container'>
      <h1>Detalles odontólogo Id: {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      {dentist ? (
        <div className='detail'>     
          <table>
            <thead>
              <tr>
                <th>Nombre      </th>
                <th>Email       </th>
                <th>Teléfono    </th>
                <th>Website     </th>     
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {dentist.name}    </td>
                <td> {dentist.email}   </td>
                <td> {dentist.phone}   </td>
                <td> {dentist.website} </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>Cargando...</p>
      )}

    </div>
  )
}

export default Detail