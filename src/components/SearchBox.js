import React from 'react';
const SearchBox =(props)=>{
    return(
        <div className='pa2'>
        <input onChange={props.onMyChange} className='pa3 ba b--red bg-light-yellow' type='search' placeholder='search flowers'/>
        </div>
    );
}
export default SearchBox;