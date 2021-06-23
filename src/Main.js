import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import beastsData from './data.json'
import { Row } from 'react-bootstrap';
import HornsForm from './HornsForm';


class Main extends Component {


  constructor() {
    super();
    this.state = {

      filter: false
    }
  }

  handelFilter = () => {
    this.setState({

      filter: !this.state.filter
    })
  }
  render() {

    return (


      <>


        <HornsForm horns={this.props.horns} />

        <Row>


          {beastsData.filter(beast => beast.horns === 1).map(beast => (

            <HornedBeasts image_url={beast.image_url}
              title={beast.title}
              description={beast.description}
              horns={beast.horns}
            />

          ))}

        </Row>


        {/*         

        <Row>

          {
            beastsData.map(beast => {
              return <HornedBeasts image_url={beast.image_url}
               title={beast.title}
                description={beast.description} 
                horns={beast.horns}
                />


            }
            )
          }

        </Row> */}

      </>

    )
  }
}

export default Main
