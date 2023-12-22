import React from 'react'
import Navcss from './Navbar.module.css'
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';



const goToCourses = () => {
  window.scrollTo({ top: 650, left: 0, behavior: "smooth" });
}



const goToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

const goToContacts = () => {
  window.scrollTo({ top: 2000, left: 0, behavior: "smooth" });
}


const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);


  const handleClick = () => {
    setShowMenu(!ShowMenu);
    console.log('clicked')
  }

  return (
    <>
      <div className={Navcss.main}>
        <div className={Navcss.background}>
          <Link className={Navcss.links} onClick={goToTop} to="/">Home</Link>
          <Link className={Navcss.links} to='/' onClick={goToCourses}>Courses</Link>
          <Link className={Navcss.links} to='/' onClick={goToContacts}>Contact Us</Link>
          <Link className={Navcss.links} to="/credits">Credits</Link>
          <div className={Navcss.menu} onClick={handleClick}><GiHamburgerMenu size={30} style={{ color: 'white' }} /></div>
        </div>
        {ShowMenu && (
          <div className={`${Navcss.open} ${ShowMenu ? 'show' : ''}`}>
            <Link className={Navcss.links1} onClick={goToTop} to="/">Home</Link>
            <Link className={Navcss.links1} to='/' onClick={goToCourses}>Courses</Link>
            <Link className={Navcss.links1} to='/' onClick={goToContacts}>Contact Us</Link>
            <Link className={Navcss.links1} to="/credits">Credits</Link>
          </div>
        )}
      </div>
    </>
  )

}

export default Navbar