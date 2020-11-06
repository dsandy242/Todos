import React from 'react';
import { FaRainbow } from 'react-icons/fa';
import Elsa from '../../NewsSearch/Elsa.jpg';
const PrincessElsa=(props)=>{
    return <div style={{backgroundColor:FaRainbow}}>
      <h1>  Here Is PrincessElsa News {props.item}...........</h1>
        <img src={Elsa} width="250px" height="200px" style={{padding:"50px"}}></img>
    </div>
}
export default PrincessElsa;