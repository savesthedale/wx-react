import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
class Current extends Component {
    state = {
      all:[],
    }

 // Code is invoked after the component is mounted/inserted into the DOM tree.
 componentDidMount(props) {  
    var lat = this.props.lat
    var lon = this.props.lon
    fetch('http://localhost:7171/api/currently?lat='+lat+'&lon='+lon)
    .then(result => result.json())
      .then(result => {
        this.setState({
          all: result,
        })
      })
  }

  render() {
    const data = this.state.all
    return (      
      <div>          
      <Container>
      <h1 style={{margin:'3rem 0 1rem 0 ' }} class="text-center" > {data.location} </h1>
      <div class="text-center"><img  class="img-fluid" style={{height: '15rem', margin:'-5% auto -5% auto'}} src={`icons/${data.icon}.svg`}/></div>
      <h1 class=" display-1 text-center">{Math.round(data.temp)}&#176;</h1>
      <h2 style={{margin:'1rem 0 0 0 ' }}class="text-center">{data.description}</h2>
      <h4 style={{margin:'2rem 0 0 0 ' }} class="text-center">{Math.round(data.wind)} mph  &nbsp; &nbsp;<img src={`icons/wind.png`} style={{height:'2rem', transform: `rotate(${data.deg}deg)` }}></img></h4>
 </Container>
      </div>    
    )
  }
}

  export default Current


