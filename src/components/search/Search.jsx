import React, { useState } from 'react';
import "./search.css"

const Search = () => {


    const [searchValue , setSearchValue] = useState("Search...")
    const defaultValue = "Search..."

    function handleBlur() {
        if (searchValue === '') {
            setSearchValue(defaultValue);
          }
    }

    function handleClear() {
        if(searchValue === defaultValue) {
            setSearchValue('')
        }
    }



    return (
        <div className='search'>
            <input onChange={e => setSearchValue(e.target.value)} onBlur={handleBlur} onClick={handleClear} type="text" value={searchValue}/>
        </div>
    );
};

export default Search;