import React from 'react';
import CardCss from './Card.module.css';

function Card(props)
{
    return(
      <>
      <div className={CardCss.main}>
         <div className={CardCss.imageDiv}>
            <img style={{width: '100%', height: '100%', borderRadius:'15px'}}  src={props.Image} />
         </div>
         <div className={CardCss.headingDiv}>
         <h1 className={CardCss.heading}>{props.Heading}</h1>
         <p className={CardCss.para}>{props.description}</p>
         </div>
      </div>
      </>
    );
}

export default Card;