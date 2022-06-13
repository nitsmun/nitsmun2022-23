import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import './Navbar.css';
const Navbarmenu = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img className="img-left0" src="./Images/nitsmun.png" alt="Nitsmun-logo" />
                        <img className="img-left" src="https://nitsmun.in/img/logo.svg" alt="Nitsmun-logo" />
                    </NavLink>
                </div>
                <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About Us </NavLink> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Events <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Juniormun`}> Junior MUN </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Workshop`}>Workshop </NavLink> </li>
                        </ul>
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Team`}> Our Team </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Articles`}> Articles </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Apply`}> Apply Now! </NavLink> </li>
                    </ul>
                    </nav>     
                </div>   
            </div>
	    </div>
    </header>
    )
}
export default Navbarmenu
