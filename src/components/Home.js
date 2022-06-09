import {  Container, Row, Col, Nav, Navbar, ProgressBar, Table, Image } from 'react-bootstrap';
import React, { Component } from 'react'; 
import Layout from './Layout'
import  Presidential from './Presidential'
import profilepic from './resources/images/smallprofile.png'
class Home extends Component { 
    constructor(props) {
        super(props);
        this.state = {
        }
      }
    render()
    {

        return (
                    
                            <Presidential />
              
                    
            )
    }
}
export default Home;
