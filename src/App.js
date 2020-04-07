import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Icon, Button } from 'antd';
import './redux/index'
import { addGUN, addGUNAsync } from './redux/index';
import { connect } from 'react-redux';
import { logout } from './redux/Auth.redux';



@connect(
  state => {return state }, 
  { addGUN, addGUNAsync, logout}
)

class App extends Component {
  render() {
    const store = this.props.store
    // const addGUNAsync = this.props.addGUNAsync
    const num = this.props.counter
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React{num}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary" onClick={this.props.logout}>Primary</Button>
      </div>
    );
  }
}

export default App;
