//#region IMPORTS
//*REACT
import React from 'react';
//*ADDONS
import { useNavigate } from 'react-router-dom';
//*CSS
import './footer.css';
//#endregion

const Footer = () => {
  //#region VARIABLES
  const copyright = String.fromCodePoint(0x00A9);
  let navigate = useNavigate();
  //#endregion

  //#region HTMLS
  return (
    <div className='foot'>
      <div className='containerF'>
        <div className='colS'>
          <span className='copyR'>{`${copyright}`} 2024 Hector Lopez Gonzalez</span>
        </div>
        <div className='colC'>
          <p className='linkF' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>Go To Top</p>
          <p href='/' className='linkF' onClick={() => { navigate("/") }}>Home</p>
        </div>
        <div className='colS'>
          <span className='credits'>Designed and Coded by <span className='name'>Hector Lopez Gonzalez</span></span>
          <br />
          <span className='credits'>Special Thanks to <span className='linkF' href='https://www.instagram.com/chaos.tinta/' onClick={() => { window.open("https://www.instagram.com/chaos.tinta/", '_blank') }}>Chaos En Tinta</span></span>
        </div>
      </div>
    </div>
  )
  //#endregion
}

export default Footer;