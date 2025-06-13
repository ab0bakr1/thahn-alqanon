import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Nav } from "react-bootstrap";


const Navbar = () => {
    const [NavMenu , setNavMenu] = useState("nav-menu");
    const [navBtnToggle, setNavBtnToggle] = useState("nav-btn");
    const [Overlay, setOverlay] = useState("overlay");
    const navBtn  =()=>{
        NavMenu === "nav-menu" ? setNavMenu("nav-menu active") : setNavMenu("nav-menu");
        navBtnToggle === "nav-btn" ? setNavBtnToggle ("nav-btn active") : setNavBtnToggle("nav-btn");
        Overlay === "overlay" ? setOverlay ("overlay active") : setOverlay("overlay");
    }
  return (
    <div className="nav align-items-center position-relative">
            <button onClick={navBtn} className={navBtnToggle}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={NavMenu}>
                <Nav.Link as={NavLink} to="/">الرئيسية</Nav.Link>
                <Nav.Link as={NavLink} to="/">من نحن</Nav.Link>
                <Nav.Link as={NavLink} to="/">خدماتنا</Nav.Link>
                <Nav.Link as={NavLink} to="/">للتواصل</Nav.Link>
            </ul>
            <div className={Overlay} onClick={navBtn}></div>
        </div>
  )
}

export default Navbar