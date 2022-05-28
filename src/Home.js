import {  Container, Row, Col, Nav, Navbar, ProgressBar, Table, Image } from 'react-bootstrap';
import React, { Component } from 'react'; 
import Profile from './Profile'
import ProfileOther from './ProfileOther'
import ProfileList from './ProfilesList'
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

                    <div>
                    <Navbar bg="dark" variant="dark" style={{ height : "40px" }} >
                                
                                    <Nav >
                                      <Nav.Link style={{ height : "40px", color :"#32CD32", fontWeight : 'bold' }}>Total Votes:15,000,000</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>Raila Odinga:7,500,000</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>William Ruto:7,500,000 </Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>% age-</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>RAO:50%,</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>WSR:50%</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}> Source : Registrar of Parties</Nav.Link>
                                    </Nav>
                                 
                        
                            </Navbar>
                            <Row  className="mt-2">
                                <Col md="auto">
                                     <Profile style={{ marginLeft : '5px'} } />
                                </Col>
                                <Col>
                             <  ProfileList />
                                          
                                </Col>
                            </Row>

                    </div>
            )
    }
}
export default Home;
