import React, { useState } from 'react'
import "./Login.css"
import email from "../assests/email.png"
import password from "../assests/password.png"
import person from "../assests/person.png"
const Login = () => {
  const [action,setAction] = useState("Sign Up");

  return (
  
    <div className={"container"}>
    <div className={"header"}>
      <div className={"text"}>{action}</div>
      <div className={"underline"}></div>
    </div>
    <div className={"inputs"}>
      {action === "Login"?<div></div>: <div className={"input"}>
        <img src={person} alt="" />
        <input type="text" placeholder='Name' />
      </div>}
     
      <div className={"input"}>
        <img src={email} alt="" />
        <input type="email" placeholder='Email' />
      </div>
      <div className={"input"}>
        <img src={password} alt="" />
        <input type="password" placeholder='Password'/>
      </div>
    </div>
    {action === "Sign Up"?<div></div>:<div className="forgotpassword">Lost Password ?<span> Click Here</span></div>}
    
    <div className={"submitcontainer"}>
      <div className={action==="Login"?"submit grey":"submit" }onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      <div className={action==="Sign Up"?"submit grey":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
    </div>
    
   </div>
  )
}

export default Login
 