import React,{Component} from 'react';
import './App.css';
import TodoApp from './todoApp/todoApp'
//import CustomTextInput from './CustomInput/CustomInput';
// class App extends Component {
//   constructor(props) {
//     super();
//     this.textInput = React.createRef();
//   }
//   componentDidMount() {
//     this.textInput.current.focusTextInput();
//   }
//   render() {
//     return (
//       <CustomTextInput ref={this.textInput} />
//     );
//   }
// }
//export default App;

import MyTodoApp from './MyTodoApp/todoMain';
import LoginPage from './LoginPage/loginMain';
import Main from './passwordGenerator/components/Main';
import Calculator from './Calculator/Calculator';
import NewsSearch from './NewsSearch/NewSearchComponents/Main';
import NewSearchRouter from './NewsSearch/NewSearchRouter';
import CovidCases from './CovidCases/CovidMain';
import NewsAPI from './NewsAPI/Main';
import FunComponent from './hooks/FunComponent';
import QueryParams from './QueryParams/QueryParams';
import UseEffectHook from './hooks/useEffectHook';
// import './LoginPage/login.css';
class App extends Component{
  render(){
    return <>
      {/* <TodoApp></TodoApp> */}      {/* Success Todos */}
      {/* <MyTodoApp></MyTodoApp> */}
      {/* <LoginPage></LoginPage> */}      {/* Success Login page */}
      {/* <Main></Main>           success password generator */}
      {/* <Calculator></Calculator> */}
      {/* <NewsSearch></NewsSearch> */}
      {/* <NewSearchRouter></NewSearchRouter> */}
      {/* <NewsAPI></NewsAPI> */}
      {/* <CovidCases></CovidCases> */}
      {/* <FunComponent></FunComponent>
      <UseEffectHook></UseEffectHook> */}
      {/* <QueryParams></QueryParams> */}
     


    </>
  }
}
export default App;
