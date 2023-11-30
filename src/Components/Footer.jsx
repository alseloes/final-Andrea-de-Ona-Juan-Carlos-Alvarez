import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';


const Footer = () => {

  const { contextValue } = useContext(ContextGlobal);
  const { state } = contextValue;

  
  return (
    <footer className={state.theme} >
        <p>Powered by</p>
        <img src='/images/DH.png'             alt='DH-logo'/>
        <img src='/images/ico-facebook.png'   alt='icon facebook'   className='icons'/>
        <img src='/images/ico-instagram.png'  alt='icon instagram'  className='icons'/>
        <img src='/images/ico-whatsapp.png'   alt='icon whatsapp'   className='icons'/>
        <img src='/images/ico-tiktok.png'     alt='icon tiktok'     className='icons'/>
    </footer>
  )
}

export default Footer
