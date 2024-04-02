import React, { useState} from 'react';
import './Header.scss'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import HeaderData from './HeaderData';
import  logo  from "../../assets/Logo/Logo1.JPG";


const Header = () => {

    const [sidebar,setSideBar] = useState(false);

    const showSideBar = (event) => {
    event.preventDefault();
    setSideBar(!sidebar)
}
    return (
        <div className='header'>
                <div className="header__logo-container">
                    <Link to="/">
                        <img className="header__logo" src={logo} alt= "header logo"></img>
                    </Link>
                </div>
                
            
                <div className='header__nav-bar'>
                <Link to='' className='header__menu-bars'
                        onClick={showSideBar}>
                        <FaBars />
                    </Link>
                </div>
            <div className={sidebar ? 'header__menu active' : 'header__menu'}>
                <ul className='header__items' onClick={showSideBar}>
                    <li className="header__toggle">
                        <Link to ='/' className='header__bars'>
                            <AiOutlineClose/>
                        </Link>
                    </li>
                    {HeaderData.map((item,index) =>{
                        return(
                            <li key={index} >
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
            
    );
};

export default Header;



               