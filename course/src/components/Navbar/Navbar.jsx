import React from 'react'
import Navcss from './Navbar.module.css'
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={Navcss.background}>
        <Link className={Navcss.links} to="/">Home</Link> 
       <Link className={Navcss.links} to="/courses">Courses</Link>
       <Link className={Navcss.links} to="/contactus">Contact Us</Link>
       <Link className={Navcss.links} to="/credits">Credits</Link>
    </div>
  )
}

export default Navbar