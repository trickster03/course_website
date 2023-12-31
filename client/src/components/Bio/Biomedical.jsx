import React from 'react'
import Card from '../../components/Card/Card'
import bio from './bio.png'
import biocss from './Bio.module.css'
import { Link } from 'react-router-dom'
const Biomedical = () => {
  return (
    <div className={biocss.phy}>
      <h1 className={biocss.heading}>Biomedical</h1>
    <div className={biocss.cardDiv}>
  <Link to='/bio/video' className={biocss.link}><Card Heading="Videos" description="This course contains all the lecture videos, notes and assignments." Image={bio}/></Link>  
  <Link to='/bio/notes'  className={biocss.link}> <Card Heading="Notes" description="This course contains all the lecture videos, notes and assignments." Image={bio}/></Link> 
   <Link to='/bio/assignment'  className={biocss.link}><Card Heading="Assigment" description="This course contains all the lecture videos, notes and assignments." Image={bio}/></Link> 
   </div>
   </div>
  )
}

export default Biomedical
