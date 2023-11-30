import React, { useContext } from 'react';
import "../index.css"
import Form from '../Components/Form'
import {ContextGlobal} from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { contextValue } = useContext(ContextGlobal);
  const { state } = contextValue;  

  return (
    <div className={state.theme} id="contacto">
      <h2>¿Quiere saber más sobre nosotros?</h2>
      <p>Envíanos tus datos y nos pondremos en contacto</p>
      <Form/>
    </div>
  );
};

export default Contact;