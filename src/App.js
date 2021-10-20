import React,{Component} from 'react';
import './App.css';
import Photo from './components/Photo';
import Data from './components/Data';


class App extends Component{

	constructor(){
		super();
		this.state={
			searchfield:'',
			data:[]
		}
	}

	onSearch=(event)=>{

		this.setState({searchfield:event.target.value});

	}

	onSubmit=()=>{

		if(this.state.searchfield ===''){
			alert("Empty input");
		}

		fetch(`https://pixabay.com/api/?key=23662676-e53458dd0ffdeedaca1e79e2a&q=${this.state.searchfield}&image_type=photo`)
		.then(resp=>{
			return resp.json();
		})
		.then(users=>{
			this.setState({data:users.hits});
			console.log(this.state.data);
		})
       
		.catch((error)=>{
			console.log(error);
		})

	}
    

    onLoad=()=>{
    	window.location.reload();
    }





	render(){
		return(
			<div>
			<h1 className="b">Photo Gallery</h1>
			<Photo onSearch={this.onSearch} onLoad={this.onLoad} onSubmit={this.onSubmit}/>
			<Data data={this.state.data}/>
			</div>

			);
	}
}


export default App;
