import React from 'react';

const Gallery=(props)=>{

	return(
		<div>
		<a href={props.page}><img className="border grow border-4 border-warning rounded-circle" src={props.url} alt="Flowerimage"/></a>
		</div>
		);
}

export default Gallery;