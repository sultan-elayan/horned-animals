import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import SelectedBeast from './SelectedBeast';
import beastsData from './data.json'




export class App extends Component {
  render() {
    return (
      <div>

        <Header/>

      <Container>

        <Main/>

       </Container>

        <Footer/>
      </div>
    )
  }
}

export default App
