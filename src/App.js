import React, { Component } from 'react';
import './App.css';
import MonSite from "./MonSite/MonSite.js";
import {Router, Route} from "react-router";

class App extends Component {
  render() {
    return (      
      <MonSite />
    );
  }
}

export default App;