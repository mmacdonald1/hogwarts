import React, {Component} from 'react';


export default class HogCard extends Component{

  render(){
    const {name, specialty, greased} = this.props.hog
    const weight = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    const medal = this.props.hog['highest medal achieved']
    return(
      <div className='pigTile'>
        <h1>{name}</h1>
        <h2>{specialty}</h2>
        <p>{`${greased}`}</p>
        <p>{weight}</p>
        <p>{medal}</p>
      </div>
    )
  }
}
