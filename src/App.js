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
class App extends Component{
  render(){
    return <div> 
      {/* <TodoApp></TodoApp> */}
      {/* Success Todos */}
      {/* <MyTodoApp></MyTodoApp> */}
    </div>
  }
}
export default App;
