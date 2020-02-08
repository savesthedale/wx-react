
import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useCookies, Cookies } from 'react-cookie';
import Moment from 'react-moment';
import 'moment-timezone';
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Link = require('react-router-dom').Link

class Forecast extends Component {
    state = {
      data:[],
    }


 // Code is invoked after the component is mounted/inserted into the DOM tree.
 componentDidMount(props) {  
    var lat = this.props.lat
    var lon = this.props.lon
    var api = process.env.REACT_APP_API
    fetch('http://localhost:7171/api/forecast?lat='+lat+'&lon='+lon)
    .then(result => result.json())
      .then(result => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    
  var days = this.state.data.map((item, key) =>
  <Col md={{ span: 2, offset: 1 }} >
      <div class="forecast_box">
        <h5 class="text-center">{item.time}</h5>
        <p class="text-center"><img src={`icons/${item.icon}.svg`}></img> </p>
        <h1 class="text-center">{Math.round(item.temp)} &#176;</h1>
        <p class="text-center">{item.description}</p>
        <p style={{margin:'1rem 0 0 0 ' }} class="text-center">{Math.round(item.wind)}mph <img src={`icons/wind.png`} style={{height:'16px', transform: `rotate(${item.deg}deg)` }}></img> {item.card} </p>       
      </div>
  </Col> )

    return (
      <Row className="justify-content-md-center-mb-3">
        { days}
      </Row> 
    ) 
  }
}
  export default Forecast




