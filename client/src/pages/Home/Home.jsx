import React from 'react'
import Homecss from './Home.module.css'
import { Link } from 'react-router-dom'
import image1 from './image6.png'
import image2 from './image7.png'
import About from '../About/About'

const goToCourses=()=>{
  window.scrollTo({ top: 650, left: 0, behavior: "smooth" });
}
const Home = () => {
    
  return (
    <>
    <div className={Homecss.main}>
       <div className={Homecss.textdiv}>
        <h1 className={Homecss.heading}>Start Learning with all the resources at one place.</h1>
        <Link onClick={goToCourses}>
            <button className={Homecss.button} >Go to courses!</button>
        </Link>
       </div>
       <div className={Homecss.imagediv}>
        <div className={Homecss.absdiv}>
           <img className={Homecss.absimage} src={image2} />
        </div>
       
        <div className={Homecss.normaldiv}>
            <img className={Homecss.image} src={image1} />
        </div>
       </div>
    </div>
     <About />
    </>
  )
}

export default Home