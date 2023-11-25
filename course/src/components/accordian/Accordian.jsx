import React, {useState} from 'react'
import accss from './Accordian.module.css'
const Accordian = ({ title, content }) => {
    
         const [isActive, setIsActive] = useState(false);
    return (
    <div className={accss.accordion_data}>
      
      <div className={accss.accordion}>
        <div className={accss.accordion_item}>
          <div className={accss.accordion_title} onClick={() => setIsActive(!isActive)}>
            <div className={accss.title}>{title}</div>
            <div className={accss.plus}>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className={accss.accordion_content}>{content}</div>}
        </div>
      </div>
    </div>
  )
}

export default Accordian
