import React from 'react';
import political from '../../NewsSearch/political.jpg';
const PoliticalNews=(props)=>{
    return <div>
       <h1 style={{justifyContent:"start",  display: "flex"}}> Here Is Political News {props.item}</h1>
        <div>
        <img src={political} width="500px" height="400px" style={{padding:"50px"}}></img>
        </div>
    </div>
}
export default PoliticalNews;