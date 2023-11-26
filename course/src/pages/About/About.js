import React from 'react';
import AboutCss from './About.module.css'
import Card from '../../components/Card/Card'
import physics from './physics.png';
import bio from './bio.png';
import { Link } from 'react-router-dom';

function About() {
    return (
       <>
          <div className={AboutCss.main}>
              <h1 className={AboutCss.heading}>Top Courses</h1>
              <div className={AboutCss.cardDiv}>
             <Link to='/physics' className={AboutCss.link}> <Card Heading="Physics Course" description="This course contains all the lecture videos, notes and assignments." Image={physics}/></Link> 
             <Link to='/bio' className={AboutCss.link}><Card Heading="Biomedical Course" description="This course contains all the lecture videos, notes and assignments." Image={bio}/></Link> 
              </div>
          </div>
       </>
    );
  }

export default About;