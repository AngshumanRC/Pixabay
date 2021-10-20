import React from 'react';
import Gallery from './Gallery';




const Data=({data})=>{
	return(
		<div className="flex-wrap d-flex justify-content-evenly">
		
             {
			data.map((user,i)=>{
				return <Gallery key={i} id={data[i].id} url={data[i].userImageURL} page={data[i].pageURL}/>
			})


		    }
		
		</div>

		);
}



export default Data;