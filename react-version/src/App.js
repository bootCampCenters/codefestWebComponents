import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { wc } from './utils/webcomponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageFromWebComponent: '',
      first: 'the Parent component',
      last: 'in Stencil'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{alignContent: "center"}}>
          <p>{ this.state.messageFromWebComponent }</p>
        </div>
        <div style={{width: "100%", height: "20rem", "textAlign": "left", padding: "10px"}}>
          <my-component 
            first={this.state.first} last={this.state.last}
            ref={wc({ onEvent: (e) => this.eventInReact(e) })}>
          </my-component>
        </div>
      </div>
    );
  }

  eventInReact = ($event) => {
    console.log($event);
    $event.preventDefault();
    this.setState({
      messageFromWebComponent: $event.detail.data.data
    });
  }
}

export default App;
