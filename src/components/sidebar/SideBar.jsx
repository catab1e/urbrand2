import React from 'react';
import Filter from '../forms/filter/Filter';
import Search from '../search/Search';
import "./sideBar.css"

const SideBar = ({showSideBar}) => {



    return (
        <div style={showSideBar} className='sidebar'>

            <div className='sidebar__filter'>
                <Search />
                <Filter />
            </div>
            
        </div>
    );
};

export default SideBar;