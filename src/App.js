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
// import './LoginPage/login.css';
class App extends Component{
  render(){
    return <>
      {/* <TodoApp></TodoApp> */}      {/* Success Todos */}
      {/* <MyTodoApp></MyTodoApp> */}
      {/* <LoginPage></LoginPage> */}      {/* Success Login page */}
      {/* <Main></Main>           success password generator */}
      <Calculator></Calculator>

    </>
  }
}
export default App;
