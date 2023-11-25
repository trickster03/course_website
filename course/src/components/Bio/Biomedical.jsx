import React from 'react'
import Card from '../../components/Card/Card'
import bio from './bio.png'
import biocss from './Bio.module.css'
const Biomedical = () => {
  return (
    <div className={biocss.phy}>
    <div className={biocss.cardDiv}>
    <Card Heading="Vidoes" description="This course contains all the lecture videos, notes and assignments." Image={bio}/>
    <Card Heading="Notes" description="This course contains all the lecture videos, notes and assignments." Image={bio}/>
    <Card Heading="Assigment" description="This course contains all the lecture videos, notes and assignments." Image={bio}/>
   </div>
   </div>
  )
}

export default Biomedical
