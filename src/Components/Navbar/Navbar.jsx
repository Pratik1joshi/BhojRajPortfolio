import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    const[menu,setMenu] = useState("home")

  return (
    <div>
        <div className="main-navbar-container">
            <div className="logo-name-navbar">
                Bhoj Raj Pandit
            </div>
            <div className="other-option-navbar">
                <ul>
                    <li onClick={()=>{setMenu("home")}} className={menu === 'home'?"red":""}><Link  to='/' style={{textDecoration: 'none'}} onClick={()=>{setMenu("home")}} className={menu === 'home'?"red link":"link"}>Home</Link></li>
                    <li onClick={()=>{setMenu("contact")}} className={menu === 'contact'?"red":""}><Link to='/contactme' style={{textDecoration: 'none'}} className={menu === 'contact'?"red link":"link"}>Contact Me</Link></li>
                    <li onClick={()=>{setMenu("resume")}} className={menu === 'resume'?"red":""}><Link to='/resume' style={{textDecoration: 'none'}} className={menu === 'resume'?"red link":"link"}>Resume</Link> </li>
                    <li onClick={()=>{setMenu("project")}} className={menu === 'project'?"red":""}><Link to='/projects' style={{textDecoration: 'none'}} className={menu === 'project'?"red link":"link"}>Projects</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar