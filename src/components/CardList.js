import React from 'react';
import Card from './Card';
const CardList=({flowers})=>{
    const CardArray=flowers.map((value,index)=>{
        return <Card key={index} id={flowers[index].id} name={flowers[index].name} source={flowers[index].source} />
    });
return(
<div>
    {CardArray}
    </div>

);
}
export default CardList;