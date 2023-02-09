import React, { useState } from 'react';
import SideBar from '../sidebar/SideBar';
import "./navbar.css"

const Navbar = () => {


    const [showSideBar , setShowSideBar] = useState({ left: '-20' });


    const moveSideBar = () => {
        setShowSideBar({left: showSideBar.left === '-20%' ? '20%' : '-20%'})
    }

    
    return (
        <div className='navbar'>
            <SideBar style={showSideBar}/>

            <div className='navbar__inner'>
                <div onClick={moveSideBar} className='navbar__button'>

                </div>
                <div className='navbar__inner__left'>
                    
                </div>

                <div className='navbar__inner__right'>
                    <span>About</span>
                    <span>Products</span>
                    <span>Price</span>
                    <span>Q&A</span>
                    <span>Shtoto</span>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;