import React from 'react';
import LogoComponent from '../LogoComponents/LogoComponent';
import NavBar from './NavBar';
import WebSettings from './WebSettings';
import '../../styles/Header.css'; 

function Header()
{
    return(
        <>
        <div className='header-container'>
          <LogoComponent/>
          <NavBar/>
          <WebSettings/>
          </div>
        </>
    )
}

export default Header;