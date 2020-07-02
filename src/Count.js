import React, { Component } from 'react';

class Count extends Component {
  render() {
 const age=12;
 const address='qn'
    return (
      <div>
        <p>Hello <Name   infor ={{age,address}} /></p>
      </div>
    );
  }
}
class Name extends Component {

  constructor(props) {
    super(props);
    this.state ={
      count :4
    }
    this.timer = this.timer.bind(this);
    console.log("constructor")
  }
  timer() {
  //  this.setState({count:this.state.count -1})
    var newCount = this.state.count - 1;
    if(newCount >= 0) { 
        this.setState({ count: newCount });
    } else {
        clearInterval(this.state.intervalId);
    }
 }
 
  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId});
 }
 
 render() {
 
     return (
       <>
        {this.state.count}
       </>
     );
 }
}
export default Count;

