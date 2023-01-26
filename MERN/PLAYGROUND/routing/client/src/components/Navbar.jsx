import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <ul>
            <li> <Link to={"/"}>Home</Link> </li>
            <li> <Link to={"/aboutus"}>About Us</Link> </li>
            <li> <Link to={"contact"}>Contact</Link> </li>
            <li> <Link to={"players"}>Players</Link> </li>
            <li> <Link to={"teams"}>Teams</Link> </li>
            
        </ul>
    </div>
  )
}

export default Navbar