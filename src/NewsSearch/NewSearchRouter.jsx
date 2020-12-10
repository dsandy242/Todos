import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewSearch from './NewSearchComponents/Main';
import PoliticalNews from './NewSearchComponents/PoliticalNews';
import Covid2020 from './NewSearchComponents/Covid2020';
import EducationalNews from './NewSearchComponents/EducationalNews';
import PrincessElsa from './NewSearchComponents/PrincessElsa';
import SpiderMan from './NewSearchComponents/SpiderMan';
import MovieNews from './NewSearchComponents/MovieNews';
import Election from './NewSearchComponents/Election2020';
import NavBar from './NavBar';
const RouterFun =(props)=>{
return <Switch>
<Route path="/" component={NewSearch} exact />
 <Route path="/PoliticalNews" component={PoliticalNews}  />
 <Route path="/Covid2020" component={Covid2020} />
 <Route path="/EducationalNews" component={EducationalNews} />
 <Route path="/PrincessElsa" component={PrincessElsa} />
 <Route path="/SpiderMan" component={SpiderMan} />
 <Route path="/MovieNews" component={MovieNews} />
 <Route path="/ElectionResults" component={Election} />
<Route component={Error} />               
</Switch>

}
export default RouterFun;