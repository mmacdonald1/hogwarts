import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCollection from './HogCollection'

class App extends Component {


  render() {
    return (
      <div className="App">
          < Nav />
          < HogCollection />
      </div>
    )
  }
}

export default App;
