import React from 'react';

const SearchBox = ({placeholder, Func}) => (
        <input className="search-box"
          type="search" 
          placeholder={placeholder}
          onChange={Func}
        />
)
export default SearchBox;