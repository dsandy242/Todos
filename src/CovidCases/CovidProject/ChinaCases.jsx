import React from 'react';
const chinaCases=(props)=>{
    const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 3)
const str=yesterday.toISOString();
//let date1="2020-06-26T00:00:00Z"
 
console.log(str);
return (<div><h1 style={{color:"red"}}>YesterDay's Corona Virus Cases and place in China</h1>
  {props.china
  .filter((d)=>d.Date>=str)
  .map((cont, index) => (
      <div className="style" key={index}>Place: {cont.Province}!<br/>DATE: {cont.Date} <br/>Confirmed:{cont.Confirmed}<br/>Deaths:{cont.Deaths} <br/></div>
  ))
   }<br/>
  </div>);
}
export default chinaCases;