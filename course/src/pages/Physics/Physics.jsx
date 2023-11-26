import React from 'react'
import Card from '../../components/Card/Card'
import physics from './physics.png'
import phycss from './physics.module.css'
<<<<<<< Updated upstream
const Physics = () => {
  return (
=======
import Navbar from '../../components/Navbar/Navbar'
const Physics = () => {
  return (
    <div>
    <Navbar/>
>>>>>>> Stashed changes
    <div className={phycss.phy}>
    <div className={phycss.cardDiv}>
    <Card Heading="Vidoes" description="This course contains all the lecture videos, notes and assignments." Image={physics}/>
    <Card Heading="Notes" description="This course contains all the lecture videos, notes and assignments." Image={physics}/>
    <Card Heading="Assigment" description="This course contains all the lecture videos, notes and assignments." Image={physics}/>
   </div>
   </div>
<<<<<<< Updated upstream
  )
}

export default Physics
=======
   <Footer/>
   </div>
  )
}

export default Physics
>>>>>>> Stashed changes
