import React, { Component } from 'react';  
import {  Row, Col, Nav, Navbar } from 'react-bootstrap';
class AppNav extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
        }
      }

    render()
    {   
        
        return (
            <Navbar bg="dark" variant="dark" style={{ height : "40px" }} className="navbar navbar-inverse navbar-fixed-top">
                                
                                    <Nav >
                                      <Nav.Link style={{ height : "40px", color :"#32CD32", fontWeight : 'bold' }}>Total Votes : {this.props.defsett == null ? 0 : this.props.defsett.totalvotes.toLocaleString('en-US') }</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>Raila Odinga : 7,500,000</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>William Ruto : 7,500,000 </Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>% age-</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>RAO : 50%,</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>WSR : 50%</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}> Source : Registrar of Parties</Nav.Link>
                                    </Nav>
                                 
                        
                            </Navbar> 
        )
    }
}
export default AppNav;