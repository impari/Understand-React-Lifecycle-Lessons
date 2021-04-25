import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Lifecycles} from './lifecycles.component';

class App extends Component{
  constructor() {
    super();
    this.state = {
      showChild: true,
      text: ''
    }
   // this.toggleChild = this.toggleChild.bind(this);
  }

  toggleChild = () => {
   // console.log('toggle lifecycle clicked');
    this.setState({showChild: !this.state.showChild}, () => {console.log(this.state)});
  }

  toggleText = () => {
    this.setState({text: this.state.text + '_hello'}, ()=>{console.log(this.state)});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <button onClick={this.toggleChild}>
           Toggle Lifecycles
         </button>
         <button onClick={this.toggleText}>
           Update text
         </button>
          {
            this.state.showChild ? < Lifecycles textProp={this.state.text} /> : null
          }
        </header>
      </div>
    );
  }
  
}

export default App;
