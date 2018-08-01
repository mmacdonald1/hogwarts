import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCollection from './HogCollection'
import Filter from './Filter'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greased: false,
      sort:"all"
    }
  }
  handleChange = (e) =>{
    if(e.target.value === "on"){
      this.setState({greased: !this.state.greased}, () => console.log(this.state.greased))
    }else if(e.target.value === "name"){
      this.setState({sort:"name"}, () => console.log(this.state.sort))
      console.log(hogs.sort((a,b)=> a.name.localeCompare(b.name)))
    }else{
      this.setState({sort:"weight"}, () => console.log(this.state.sort))
      return hogs.sort((a,b)=> a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
    }
  }


  render() {
    return (
      <div className="App">
          < Nav />
          < Filter handleChange={this.handleChange}/>
          < HogCollection hogs= {hogs}/>
      </div>
    )
  }
}

export default App;
