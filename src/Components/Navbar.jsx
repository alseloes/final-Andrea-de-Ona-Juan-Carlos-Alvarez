import React, {useContext}from 'react'
import {Link } from 'react-router-dom'
import {ContextGlobal} from './utils/global.context'
import "../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { contextValue } = useContext(ContextGlobal); 
  const { state, cambiarTheme } = contextValue;

  const navbarStyle = {
    backgroundColor: state.theme === 'dark' ? 'black' : 'white',
    color: state.theme === 'dark' ? 'white' : 'black',
    solluna: state.theme === 'dark' ? 'white' : 'black',
  };


  return (
    <nav className={state.theme}   style ={navbarStyle}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
       <div className='navbar-container'>
        <div className="navbar-left">
          <Link to="/">CLÍNICA ODONTOLÓGICA</Link>
        </div>
         
         <div className="navbar-right">
          <p><Link to="/home">Home</Link></p>
          <p><Link to="/favs" >Favoritos</Link></p>
          <p><Link to="/contacto">Contacto</Link></p>
      
          <button className={state.theme}  onClick={cambiarTheme} style ={navbarStyle} id='miboton'>

      {state.theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
      
      </button>
      </div>
    </div>
  </nav>
  
  )

}

export default Navbar