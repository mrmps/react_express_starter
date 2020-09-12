import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tables from './components/tables';
import UserQuery from './components/query';

class App extends Component {
  render() {
    return (
      <div>
      <title>SQL</title>
      <div className="sidenav">
          <Tables/>
      </div>
      <div className="main">
          <div className="container">
          <UserQuery/>
          <div className="table">
          <table id="table" align="center" border={1} />
          </div>
          </div>
      </div>
      </div>
  );
  }
}

export default App;
