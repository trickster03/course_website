import React from 'react'
import Footcss from './Footer.module.css'
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className={Footcss.background}>
            <h1 className={Footcss.heading}>Contact Us</h1>
            <div className={Footcss.footContainer}>
                <div className={Footcss.left}>
                        <p>LNMIIT <br />Rupa Ki Nangal, Post Sumel
                            <br />Via jamdoli<br />Jaipur,
                            India</p>
                   

                </div>
                <div className={Footcss.right}>
                    
                        <p>Email: Saunakkushwaha@gmail.com<br />
                            Contact: +917007623090</p>
                    
                            
                </div>
               
            </div>
            <div className={Footcss.pgb}></div>
            <br></br>
            <h4 className={Footcss.heading}>Copyright 2023 @ All rights reserved</h4>
           
=======
=======
>>>>>>> Stashed changes
                    <p>LNMIIT <br />Rupa Ki Nangal, Post Sumel,
                        Via Jamdoli<br />Jaipur,
                        India</p>
                </div>
                <div className={Footcss.right}>
                    <p>Email: Saunakkushwaha@gmail.com<br />
                        Contact: +917007623090</p>
                </div>

            </div >

    <div className={Footcss.cpyrght}>
        <div className={Footcss.cpytext}>
            <h3>Copyright 2023 @ All rights reserved</h3>
            <p> Disclaimer:
                All content on this website is protected by copyright law. Users are prohibited from unauthorized use or reproduction of any material without explicit permission. [Your Website Name] reserves the right to take legal action against any infringement.</p>
        </div>

    </div> </div >

    )
}

export default Footer
