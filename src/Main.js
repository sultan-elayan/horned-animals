import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import beastsData from './data.json'
import {Row} from 'react-bootstrap';



class Main extends Component {


  render() {




    return (


      <Row>


        {
        beastsData.map(beast => {
          return <HornedBeasts image_url={beast.image_url} title={beast.title} description={beast.description} />


        }
        )
        }

      </Row>
      
    )
  }
}

export default Main
