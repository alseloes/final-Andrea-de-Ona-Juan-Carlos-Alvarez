import React from "react";
import { useState } from "react";
import "../index.css"
import Swal from 'sweetalert2';


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const[nombre,setNombre]= useState("");
  const[email, setEmail]= useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

 
 const validarNombre =(nombre) => {
    return nombre.length > 5;
    };
   
  
  const validarEmail = (email) => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    };
  
  function handleSubmit (e){
    e.preventDefault();


    const nombreValido = validarNombre(nombre)
    const emailValido = validarEmail(email)



    if (nombreValido && emailValido){
      setNombre("");
      setEmail("");
      Swal.fire({
        title: 'Gracias!',
        text:`Gracias ${nombre}, te contactaremos cuanto antes vía mail.`,
        icon:'success',
        showConfirmButton: false,
        timer: 2600
      })
      setError(null);
      setSuccessMessage("");
    }
    else{

      Swal.fire({
        title: 'Error!',
        text:`Por favor verifique su información nuevamente.`,
        icon:'error',
        showConfirmButton: false,
        timer: 2600
      })

      setSuccessMessage("");

    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-button-container">
          <button type="submit">Enviar</button>
        </div>
      </form>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
  };
export default Form;