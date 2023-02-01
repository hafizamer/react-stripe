import React from 'react'
//import { Link } from "react-router-dom"

const Nav=()=>{

    return (
<ul className="nav border">
  <li className="nav-item">
    <a  className="nav-link active" href="/">Home</a>
    
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/login">Login</a>
  </li>
  <li className="nav-item">
    <a   className="nav-link" href="/register">Register</a>
</li>


</ul>

    )
}

export default Nav