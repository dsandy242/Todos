import React from 'react';
import { FaRainbow } from 'react-icons/fa';
import election from '../../NewsSearch/election.jpg';
const Election2020=(props)=>{
    return <div style={{backgroundColor:FaRainbow}}>
      <h1>  Here Is Election2020 News {props.item}...........</h1>
        <img src={election} width="250px" height="200px" style={{padding:"50px"}}></img>
    </div>
}
export default Election2020;