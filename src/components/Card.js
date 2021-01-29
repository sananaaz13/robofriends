import React from 'react';

const Card = ({ name , email , id }) => {
	return(
        <div className='tc dib bg-lightest-blue br3 pa3 ma2 grow bw2 shadow-5'>
        	<img  alt='robots' src={`https://robohash.org/${id}`} width="250" height="250"/>
        	<div>
        		<h2>{name}</h2>
        		<p>{email}</p>
        	</div>
        </div>
	);
}

export default Card;