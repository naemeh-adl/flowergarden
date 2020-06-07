import React from 'react';
import './Card.css';
const Card=(props)=>{
    const{name, email, id} = props
    return(
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="pic" src={`https://robohash.org/${id}?200*200`}/>
        <div className="tc">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>);
}
export default Card;