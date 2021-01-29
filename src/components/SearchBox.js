import React from 'react';


const SearchBox = ({searchChange}) => {
	return(
	  <div className='pa2'>
	      <input 
	           style={{border:'2px solid #43709c'}}
	           className= 'pa3 ba br2'
	           type="search"
	           placeholder='Search Robots' 
	           onChange={searchChange}
	       />
       </div>

	);
}


export default SearchBox;