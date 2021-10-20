import React from 'react';
import './Photo.css';

const Photo=({onSearch,onLoad,onSubmit})=>{
	return(
		<div className="c mx-auto text-center pt-2">
		<input className="g rounded-pill" placeholder="Flowers name" onChange={onSearch}/>
		<button className="rounded-pill btn-info" onClick={onSubmit}>Submit</button>
		<button className="rounded-pill btn-success" onClick={onLoad}>Reset</button>
		</div>

		);
}

export default Photo;