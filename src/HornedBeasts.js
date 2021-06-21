import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

class HornedBeasts extends Component {

    constructor(props){
        super(props);
        this.state={
            vote:0,
            
        }
    }

    voting=()=>{
        this.setState(
            {
                vote:this.state.vote+1
            })
    }



    render() {
        return (

            <div>


<Card style={{width:'300px'}}>
     <Card.Img variant="top" src={this.props.image_url} onClick= {this.voting} width='300px' />
     <Card.Body>
     <Card.Title>{this.props.title}</Card.Title>
     <Card.Text>
     {this.props.description}
     </Card.Text>
     ❤️<span>{this.state.vote}</span>
     
      </Card.Body>
      </Card>




{/* 
                <h2>{this.props.tile}</h2>
                <a onClick={this.voting}><img src={this.props.image_url}  style={{width:'300px'}} /></a>
                <p>{this.props.description}</p>
                <p>{this.props.horns}</p>
                <p>❤️<span>{this.state.vote}</span></p> */}

         
            </div>
        )
    }
}

export default HornedBeasts
