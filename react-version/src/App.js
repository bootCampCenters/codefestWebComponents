import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { wc } from './utils/webcomponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{width: "100%", height: "20rem", "textAlign": "left", padding: "10px"}}>
          <my-component 
            first="Stencil" 
            last="'Don't call me a framework' JS"
            ref={wc({
              onEvent: (e) => this.eventInReact(e)
            })}>
          </my-component>
        </div>
      </div>
    );
  }

  eventInReact = ($event) => {
    console.log($event);
  }
}

export default App;
