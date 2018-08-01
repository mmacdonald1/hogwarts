import React, {Component} from 'react'
import HogCard from './HogCard'


export default class HogCollection extends Component{
  findHogImage=(hog)=>{
      let name = hog.name.split(' ').join('_').toLowerCase()
      let fileName = require(`../hog-imgs/${name}.jpg`)
      console.log('returning', fileName)
      return fileName
  }

  generateHogs=()=>{
      return this.props.hogs.map((hog)=> <HogCard key={hog.name} hog={hog} image={this.findHogImage(hog)} />)
  }

  render(){
    return(
      <div className="ui grid container">
        {this.generateHogs()}
      </div>
    )
  }
}
