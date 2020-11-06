import React from 'react';
import movie from '../../NewsSearch/movie.jpg';
const MovieNews =()=>{
    return <div>
        <h1 style={{backgroundColor:"blue",justifyContent:"start",  display: "flex"}}>
         Here Are Some Educational News......
         <img src={movie} width="500px" height="400px" style={{padding:"50px"}}></img>
         </h1>
         </div>
}
export default MovieNews;