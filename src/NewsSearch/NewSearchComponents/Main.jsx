import React, { Component } from 'react';
import PoliticalNews from './PoliticalNews';
import './NewsSearch.css';
import {Redirect} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
class NewsSearch extends Component {
    state = {
        sItems: ["PolaticalNewss", "EducationalNews", "Covid2020", "MovieNews","ElectionResults","SpiderMan","PrincessElsa"],
        inputValue: "",
        news:""
    }
    changeHandler = (e) => {
        let inputValue = e.target.value;
        this.setState({inputValue});
    }
        handleOnClick = (e) => {
        
        let val=e.target.value;
        console.log(val);
        // if(val==="PoliticalNewss"){
        //     this.setState({news:"PoliticalNewss"})
        this.setState({redirect: val});}
        // else if(e.target.value==="PoliticalNews"){
        //     this.setState({redirect: true});}
    
            
    render() {
         const filtered = this.state.sItems
        .filter(item => { return (item.toLowerCase().includes(this.state.inputValue.toLowerCase())) })
        .map(item=><button value={item} style={{backgroundColor: "rgb(255,182,193)",fontSize:"30px",color:"black"}} onClick={this.handleOnClick}>{item}</button>)
        if (this.state.redirect==="PolaticalNewss") {
            return <Redirect push to="/PoliticalNews" />;}
        else if (this.state.redirect==="EducationalNews") {
            return <Redirect push to="/EducationalNews" />;}
        else if (this.state.redirect==="Covid2020") {
            return <Redirect push to="/Covid2020" />;}
        else if (this.state.redirect==="PrincessElsa") {
            return <Redirect push to="/PrincessElsa" />;}
        else if (this.state.redirect==="SpiderMan") {
            return <Redirect push to="/SpiderMan" />;}
        else if (this.state.redirect==="MovieNews") {
        return <Redirect push to="/MovieNews" />;}
        else if (this.state.redirect==="ElectionResults") {
            return <Redirect push to="/ElectionResults" />;}
        
        return <div>
            <h1>SEARCH FOR MORE NEWS</h1>
            <div className="newsSearch"><FaSearch></FaSearch>
                <input type="text" placeholder="search for more news....." value={this.state.inputValue} onChange={this.changeHandler}></input>
                <button style={{ width: "80px", height: "44px" }}>Search</button>
                {/* {sItems} */}
                {/* <div className="sItems"> */}
                    {/* {this.state.sItems.map((item) => { return <ul className="ulist">{item}</ul> })} */}
                 <ul className="ulist" onClick={this.clickHandler}>   {filtered}</ul>
                {/* </div> */}
                
            </div>
        </div>
    }
}
export default NewsSearch;
