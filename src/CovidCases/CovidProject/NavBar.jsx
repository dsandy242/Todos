import React from 'react';

import {Link} from "react-router-dom";
const navbar=() =>{
    return (
      <div><div><br/>
          <Link to="/" className="countryStyle" style={{marginTop:"20px",padding:'20px'}}> Home </Link>
        <Link to="/UK" className="countryStyle"> UK </Link>
        <Link to="/India" className="countryStyle">India </Link>
        <Link to="/China" className="countryStyle"> China</Link>
        </div></div>
    );
  };
  export default navbar;