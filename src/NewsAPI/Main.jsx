import React,{Component} from 'react';
import axios from 'axios';
class Main extends Component{
    
      
      
        componentDidMount(){
            axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=46363935258c42c5b6aaa691a37c3ee7')
            .then((res)=>
              {
               
               console.log(res.data.articles[1])
               
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
hello Here Am calling news API.........
        </div>
    }
}
export default Main;




// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
