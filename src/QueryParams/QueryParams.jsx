// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useParams } from "react-router";
// function User() {
//   let { id } = useParams();
//   return <h2>User {id}</h2>;
// }
// function QueryParams() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/?1">User 1</Link>
//           </li>
//           <li>
//             <Link to="/2">User 2</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/:id" children={<User />} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// export default QueryParams;

import React from 'react';
import { parse } from 'query-string';
import axios from 'axios';
class Products extends React.Component {
  state = {
    Countries: []
  };

  async componentDidMount() {
    
    const products = await axios.get('https://api.covid19api.com/country/India?from=2020-07')
    .then((res)=>
      {
       let countries=res.data;
       console.log(countries)
      this.setState({Countries:countries})
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Fanally Block Executed")
      });
      
  }

  render() {
    return (
    <React.Fragment>
      <h1>Cases in India:</h1>
   {(this.state.Countries.map((Country,index)=> <div className="style" key={index}>DATE: {Country.Date} <br/>Confirmed:{Country.Confirmed}<br/>Deaths:{Country.Deaths} <br/></div>))}
    </React.Fragment>)
  }
}
export default Products;