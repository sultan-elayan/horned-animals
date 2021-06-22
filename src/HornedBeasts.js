import React, { Component } from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import SelectedBeast from './SelectedBeast';


class HornedBeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vote: 0,

        }
    }

    voting = () => {
        this.setState(
            {
                vote: this.state.vote + 1
            })
    }

    // showModal = () => {


    // }


    render() {
        return (

            <Col>

                <Card style={{ width: '300px' }}>
                    <Col>   <Card.Img variant="top" src={this.props.image_url} onClick={this.voting} width='300px' height='380px' /></Col>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>


                        <SelectedBeast title={this.props.title}
                            description={this.props.description}
                            image_url={this.props.image_url}
                            vote={this.state.vote} />

                        ❤️ <span>{this.state.vote}</span>

                    </Card.Body>

                    {/* <Button onClick={this.showModal}>click me</Button> */}
                </Card>
            </Col>
        )
    }
}

export default HornedBeasts
