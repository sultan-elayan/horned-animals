import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  handleModel = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {


    return (

      
      <>  
        <Modal show={this.state.show} onHide={this.handleModel}>
          <Modal.Header closeButton >
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.image_url} width='450px' height='200px' />
            <br />

            <p>{this.props.description}</p>
            ❤️ <span>  {this.props.vote}</span>
          </Modal.Body>
        </Modal>
        <Button onClick={this.handleModel}> Click Here For More Info</Button>
     </>
    )
  }
  
}

export default SelectedBeast
