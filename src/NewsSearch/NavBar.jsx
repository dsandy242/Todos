import React from 'react';
import NewSearch from './NewSearchComponents/NewsSearch';
import NewSearchRouter from './NewSearchRouter';
import PoliticalNews from './NewSearchComponents/PoliticalNews';
import {Link} from 'react-router-dom';
const Navbar=()=> {
    return (
      <div>
        <Link to="/">Home </Link>
        <Link to="/PoliticalNews" >PoliticalNews</Link>
        <Link to="/Covid2020">Covid2020 </Link>
        
      </div>
    );
  };
  export default Navbar;