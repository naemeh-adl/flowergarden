import React,{Component} from 'react';
import CardList from '../components/CardList';
import {flowers} from '../Flowers';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../containers/ErrorBoundry';
import './App.css'
class App extends Component{
    constructor(){
        super();
        this.state={
            flowers:flowers,
            searchfield:''
        }
    }
// componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>response.json())
//     .then((users)=>this.setState({flowers:users}));
//     console.log(this.state.flowers);
// }
onMySearchChange=(event)=>{
    this.setState({searchfield:event.target.value});
    
    }
render(){
    const filteredFlowers=this.state.flowers.filter((flowers)=>{
        return flowers.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        
    });
    return(
    <div className='tc'>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
        <h1 className='f1'>Flower Garden</h1>
        <SearchBox onMyChange={this.onMySearchChange}/>
        <Scroll>
            <ErrorBoundry>
        <CardList flowers={filteredFlowers}/>
        </ErrorBoundry>
        </Scroll>
    </div>
    

)};
}
export default App;