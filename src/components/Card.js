import React from 'react';
import './Card.css';
const Card=(props)=>{
    const{name, source} = props;
     return(
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="pic" src={require(''+source)}/>
        <div className="tc">
            <h2>{name}</h2>
               </div>
    </div>);
}
export default Card;