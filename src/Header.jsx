import React from "react";

import './Header.css'

import { Link } from "react-router-dom";

function Header(){
    return(
        <>
          
        <header>
            <input type="text" placeholder="search here" />
            <button>login</button>
          
          <Link to={'/'}><li>Home</li></Link>

          <Link to={'/about'}><li>About</li></Link>

          <Link to={'/count'}><li>Count</li></Link>

          <Link to={'/Service'}><li>Service</li></Link>
           
          
        </header>
        </>
    )
}

export default Header;
