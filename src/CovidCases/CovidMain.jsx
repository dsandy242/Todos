import React,{Component} from 'react';
import './CovidProject/covidPageStyle.css'
import axios from 'axios';
import UkCases from './CovidProject/UkCases';
import IndiaCases from './CovidProject/IndiaCases';
import ChinaCases from './CovidProject/ChinaCases';
import Error from './CovidProject/Error';
import NavBar from './CovidProject/NavBar';
import Home from './CovidProject/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class CovidMain extends Component{

  state={
UK: [],
India: [],
China: []
  }
  componentDidMount(){
    axios.get('https://api.covid19api.com/country/United Kingdom?from=2020-06')
    .then((res)=>
      {
       let uk=res.data;
       console.log(uk)
       this.setState({UK:uk})
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Fanally Block Executed")
      });
      axios.get('https://api.covid19api.com/country/India?from=2020-06')
    .then((res)=>
      {
       let india=res.data;
       console.log(india)
      this.setState({India:india})
      
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Fanally Block Executed")
      });
      axios.get('https://api.covid19api.com/country/China?from=2020-06')
    .then((res)=>
      {
       let china=res.data;
       console.log(china)
      this.setState({China:china})
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Fanally Block Executed")
      });
      
       }
  render(){
    return <div>
      <NavBar/>
     <Switch>
     <Route path='/' component={Home} exact/>
     <Route path='/UK' render={() => <UkCases country={this.state.UK} />}/>
 <Route path="/India"  render={() => <IndiaCases r1={this.state.India}/>}/>
 <Route path='/China' render={() => <ChinaCases china={this.state.China} />}/>
 <Route component={Error}/>
            </Switch>
    </div>
}
}
export default CovidMain;