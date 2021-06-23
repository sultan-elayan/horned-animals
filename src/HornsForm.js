import React, { Component } from 'react'
import {Form} from 'react-bootstrap'




class HornsForm extends Component {

 

    render() {
        return (
            <div id="form">
                   <>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Your Favorite Horned Name</Form.Label>
                        <Form.Control type="text" placeholder="Example: Dragon" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Show Horned Beast By Horns Number</Form.Label>
                        <Form.Control as="select" onChange={this.changingevent}>
                            <option value="all">ALL</option >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>
            
                </Form>
            </>
            </div>
        )
    }
}

export default HornsForm
