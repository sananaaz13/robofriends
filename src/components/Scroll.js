import React from 'react';

const Scroll = (props) => {
   return(
       <div style={{overflowY:'scroll', border:'2px dotted #43709c', height:'800px'}}>
          {props.children}    	
       </div>

   );
};

export default Scroll;