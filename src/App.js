
import React, { Component } from 'react';

function App() {

  return (
    <div className="App">
    <Show/>
    <List/>
    </div>
  );
}

export default App;

class Show extends Component {
  constructor(props) {
    super(props);
    this.state ={
      show :false
    }
    this.showfunc = this.showfunc.bind(this);
  }
  showfunc(){
    this.setState({
      show:true
    })
  }
  render() {
    return (
      <div>
        {this.state.show &&<h2>hello</h2>}
        <button onClick={this.showfunc}>click</button>
      </div>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state={
      list:[],
      name:'',
      age:'',
      value:''
    }
    this.handleChangeAge=this.handleChangeAge.bind(this);
    this.handleChangeName=this.handleChangeName.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    //this.onDelete =this.onDelete.bind(this);
  }
  
  handleSubmit(){
    const {name,age}=this.state;
    this.setState({
      age:'',
      name:'',
      list: [...this.state.list, { name, age }],
    })
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeAge(event) {
    this.setState({age: event.target.value});
  }
  onDelete(item){
console.log(item)
const {name,age,list}=this.state;
var index = list.findIndex((it) => it.name === item.name)
console.log(index)
var b=list.splice(index, 1)

this.setState({

  list: list
}) 
console.log(list)
}

  render() {
    var {list,name,age} =this.state;
    return (
      <div>
 
           <div>
          <p>Name:</p>
          <input value={name} onChange={this.handleChangeName} />
          <p>Age:</p>
          <input value={age} onChange={this.handleChangeAge} />
          <br />
          <button onClick={this.handleSubmit}>Add</button>
        </div>
      <table >
  <tr>
    <th>Name</th>
    <th>Age</th>
    
  </tr>
 
  {
    list.length>0
    ?list.map((item,index)=>{
      return (
        
     <tr >
       <td>{item.name}</td>
       <td>{item.age}</td>
       <td><button onClick={(e)=>this.onDelete(item)} >Delete</button></td>
     </tr>
      )
    })
    :<p>nothing here</p>
  }

</table>
      </div>
    );
  }
}
