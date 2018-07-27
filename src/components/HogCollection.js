import React, {Component} from 'react'
import HogCard from './HogCard'
import hogs from '../porkers_data';

export default class HogCollection extends Component{
  findHogImage=()=>{
    hogs.forEach((hog) => {
      let name = hog.name
      console.log(name)
    })
  }

  generateHogs=()=>{
      return hogs.map((hog)=> <HogCard key={hog.name} hog={hog} />)
  }

  render(){
    return(
      <div className="ui grid container">
        {this.generateHogs()}
      </div>
    )
  }
}
