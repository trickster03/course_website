import React from 'react'
import Card from '../../components/Card/Card'
import physics from './physics.png'
import phycss from './physics.module.css'
import { Link } from 'react-router-dom'
const Physics = () => {
  return (
    <div className={phycss.phy}>
      <h1 className={phycss.heading}>Physics</h1>
      <div className={phycss.cardDiv}>
        <Link to='/physics/video' className={phycss.link}>  <Card Heading="Vidoes" description="This course contains all the lecture videos, notes and assignments." Image={physics} /></Link>
        <Link to='/physics/notes' className={phycss.link}> <Card Heading="Notes" description="This course contains all the lecture videos, notes and assignments." Image={physics} /></Link>
        <Link to='/physics/assignment' className={phycss.link}>  <Card Heading="Assignment" description="This course contains all the lecture videos, notes and assignments." Image={physics} /></Link>
      </div>
    </div>
  )
}

export default Physics
