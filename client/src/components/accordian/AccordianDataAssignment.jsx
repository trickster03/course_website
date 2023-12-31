

import React, { useState, useEffect } from 'react';
import Accordian from './Accordian';
import accss from './AccordianData.module.css';

const AccordianDataNotes = (props) => {
  const [accordionData, setAccordionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/assignments?courseName=${props.course}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data.assignments);
        setAccordionData(data.assignments);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, [props.course]);

  return (
    <div className={accss.title}>
      <h1 style={{ textDecoration: 'none' }}>Assignment</h1>
      {loading ? ( 
        <div className={accss.loading}>Loading...</div>
      ) : (
        <div className="accordion">
          {accordionData.map(({ assignDescription, assignment }, index) => (
            <Accordian key={index} title={assignDescription} content={assignment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordianDataNotes;



