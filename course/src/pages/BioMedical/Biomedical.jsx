import React from 'react'
import Card from '../../components/Card/Card'
import bio from './bio.png'
import biocss from './Bio.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const Biomedical = () => {
  return (
    <div>
  
    <div className={biocss.bio}>
    <div className={biocss.cardDiv}>
    <Card Heading="Vidoes" description="This course contains all the lecture videos, notes and assignments." Image={bio}/>
    <Card Heading="Notes" description="This course contains all the lecture videos, notes and assignments." Image={bio}/>
    <Card Heading="Assigment" description="This course contains all the lecture videos, notes and assignments." Image={bio}/>
   </div>
   </div>

   </div>
  )
}

export default Biomedical