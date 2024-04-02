import React, { useState} from 'react';
import './Header.scss'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import HeaderData from './HeaderData';


const Header = () => {

    const [sidebar,setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar)

    return (
        <div className='header'>
            <div className='header__image'>
            <Link to='' className='header__menu-bars'
                 onClick={showSideBar}>
                 <FaBars />
            </Link>
            <a href="logo" className='header__logo'>Logo</a>
            </div>
            
            <div className='header__nav-bar'>
                
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



               