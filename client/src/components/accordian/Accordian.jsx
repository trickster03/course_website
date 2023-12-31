import React, {useState} from 'react'
import accss from './Accordian.module.css'
import { BiSolidRightArrow, BiSolidDownArrow} from "react-icons/bi";
import book from './images/books.png'


const Accordian = ({ title, content }) => {
    
         const [isActive, setIsActive] = useState(false);
    return (
    <div className={accss.main}>
      <div className={accss.accordion}>
        <div className={accss.accordion_item}>
          <div className={accss.accordion_title} onClick={() => setIsActive(!isActive)}>
      
            <div className={accss.title}>{title}</div>
            <div className={accss.accContainer}>
              <a href={content}> <button className={accss.button} ><img className={accss.image} src={book}/><h1 className={accss.buttonHeading}>View </h1></button></a>
          </div>
          
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Accordian
