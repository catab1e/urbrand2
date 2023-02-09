import React from 'react';
import Search from '../../search/Search';
import Filter from '../filter/Filter';
import "./finder.css"

const Finder = () => {
    return (
        <div className='finder'>
            <Filter />
            <Search />
        </div>
    );
};

export default Finder;