import React from 'react';
import AboutCss from './About.module.css'
import Card from '../../components/Card/Card'
import physics from './physics.png';
import bio from './bio.png';


function About() {
    return (
       <>
          <div className={AboutCss.main}>
              <h1 className={AboutCss.heading}>Top Courses</h1>
              <div className={AboutCss.cardDiv}>
               <Card Heading="Physics Course" description="This course contains all the lecture videos, notes and assignments." Image={physics}/>
               <Card Heading="Biomedical Course" description="This course contains all the lecture videos, notes and assignments." Image={bio}/>
              </div>
          </div>
       </>
    );
  }

export default About;