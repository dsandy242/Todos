import React, { Component } from 'react';
import './Calculator.css';
class Calculator extends Component {
    state = {
        num: "",
        add: "",
        dummy: "",
        operator: "",
        count: ""
    }
    handleClick = (e) => {
        let count = 0;
        count = count + 1;
        console.log(count);
        let temp = [this.state.dummy] + e.target.value;
        let dummy = temp.replaceAll(",", "");
        this.setState({ dummy });
        this.setState({ count })
    }
    handleNum2 = (e) => {
        let operator = e.target.value;
        this.setState({ operator })
        let num = this.state.dummy;
        this.setState({ num });
        this.setState({ dummy: "" });
    }
    handleOperation = () => {
        let num2 = this.state.dummy;
        let num = this.state.num;
        let op = this.state.operator;
        console.log(op);
        let dummy = "";
        switch (op) {
            case "+":
                dummy = parseInt(num) + parseInt(num2);
                break;
            case "-":
                dummy = parseInt(num) - parseInt(num2);
                break;
            case "*":
                dummy = parseInt(num) * parseInt(num2);
                break;
            case "/":
                dummy = parseInt(num) / parseInt(num2);
                break;
        }
        this.setState({ dummy });
    }

    handleBS = () => {
        debugger
        let temp = this.state.dummy;
        temp = temp.toString();
        console.log(typeof (temp));
        let dummy2 = temp.slice(0, ((temp.toString().length) - 1));
        this.setState({ dummy: dummy2 });
    }
    handleClear = () => {
        let dummy = "";
        this.setState({ dummy });
    }
    render() {
        return (<>
            <div className="container" >
                <input style={{ width: "60%" }} type="text" value={this.state.dummy} onFocus="this.value=''"></input>
            </div>
            <div className="container">
                <div>
                    <div ><button value="1" onClick={this.handleClick}>1</button></div>
                    <div ><button value="4" onClick={this.handleClick}>4</button></div>
                    <div ><button value="7" onClick={this.handleClick}>7</button></div>
                    <div ><button value="0" onClick={this.handleClick}>0</button></div>
                </div>
                <div>
                    <div ><button value="2" onClick={this.handleClick}>2</button></div>
                    <div ><button value="5" onClick={this.handleClick}>5</button></div>
                    <div ><button value="8" onClick={this.handleClick}>8</button></div>
                    <div ><button value="*" onClick={this.handleNum2}>*</button></div>
                </div>
                <div>
                    <div ><button value="3" onClick={this.handleClick}>3</button></div>
                    <div ><button value="6" onClick={this.handleClick}>6</button></div>
                    <div ><button value="9" onClick={this.handleClick}>9</button></div>
                    <div ><button value="backSpace" onClick={this.handleBS}>bS</button></div>
                </div>
                <div>
                    <div ><button value="+" onClick={this.handleNum2}>+</button></div>
                    <div ><button value="-" onClick={this.handleNum2}> - </button></div>
                    <div ><button value="/" onClick={this.handleNum2}> / </button></div>
                    <div ><button onClick={this.handleOperation}>=</button></div>

                </div>
                <div><button onClick={this.handleClear}>C</button></div>
            </div>
        </>)
    }
}
export default Calculator;
