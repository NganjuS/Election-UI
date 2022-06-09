import React, { Component } from 'react';  
import {  Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
class BackendNav extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
        }
      }

    render()
    {   
        
        return (
               
                    
                        <Nav className="me-auto" style={{ backgroundColor : "#212529" }}>
                        <NavDropdown title="Add Records" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Candidates</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">County</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Statistics</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Positions</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Party</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Listings" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Candidates List</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">County List</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Statistics</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Positions List</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Party List</NavDropdown.Item>
                            </NavDropdown>
                      </Nav>
                        
                    
        )
    }
}
export default BackendNav;