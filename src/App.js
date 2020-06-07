import React,{Component} from 'react';
import CardList from './CardList';
import {flowers} from './Flowers';
import SearchBox from './SearchBox';
import './App.css'
class App extends Component{
    constructor(){
        super();
        this.state={
            flowers:flowers,
            searchfield:''
        }
    }
onMySearchChange=(event)=>{
    this.setState({searchfield:event.target.value});
    
    }
render(){
    const filteredFlowers=this.state.flowers.filter(flowers=>{
        return flowers.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        
    });
    return(
    <div className='tc'>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
        <h1 className='f1'>Robo Friends</h1>
        <SearchBox onMyChange={this.onMySearchChange}/>
        <CardList flowers={filteredFlowers}/>
    </div>
    

)};
}
export default App;