import React from 'react';
//import { declareVariable } from '@babel/types';

const SearchBox = ({ searchField, searchChange}) => {
  return (
    <div className='pa2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type="search" 
        placeholder="search Robots"
        onChange={searchChange}
      />
    </div>
    
  );
}

export default SearchBox;