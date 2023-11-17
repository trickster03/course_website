import React from 'react'
import Homecss from './Home.module.css'
import { Link } from 'react-router-dom'
import image1 from './image6.png'
import image2 from './image7.png'
const Home = () => {
    const goToCourses =()=>{
        
    }
  return (
    <div className={Homecss.main}>
       <div className={Homecss.textdiv}>
        <h1>Start Learning with all the resources at one place.</h1>
        <Link to="/courses">
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
  )
}

export default Home