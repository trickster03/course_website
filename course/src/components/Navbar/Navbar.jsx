import React from 'react'
import Navcss from './Navbar.module.css'
import { Link, NavLink } from "react-router-dom";

const goToCourses=()=>{
  window.scrollTo({ top: 650, left: 0, behavior: "smooth" });
}

const goToTop=()=>{
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

const goToContacts=()=>{
  window.scrollTo({ top: 2000, left: 0, behavior: "smooth" });
}


const Navbar = () => {
    

  return (
    <div className={Navcss.background}>
        <Link  className={Navcss.links} onClick={goToTop} to="/">Home</Link> 
       <Link className={Navcss.links} to='/' onClick={goToCourses}>Courses</Link>
       <Link className={Navcss.links}  to='/' onClick={goToContacts}>Contact Us</Link>
       <Link className={Navcss.links} to="/credits">Credits</Link>
    </div>
  )
}

export default Navbar