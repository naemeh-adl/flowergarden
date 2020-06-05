import React from 'react';
import './Card.css';
const Card=()=>{
    return(
    <div className="bg-light-green dib br3 ma2 grow bw2 shadow 5">
        <img alt="pic" src='https://robohash.org/test?200*200'/>
        <div>
            <h2>John Do</h2>
            <p>This is robot</p>
        </div>
    </div>);
}
export default Card;