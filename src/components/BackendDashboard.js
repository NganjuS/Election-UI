import React, { Component } from 'react';  
import BackendNav from './BackendNav';
import AddCandidate from './AddCandidate';
import AddStats from './AddStats';
import StatsList from './StatsList';
import AddStatsSource from './AddStatsSource';
import {  Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
class BackendDashboard extends Component {  
    constructor(props) {
        super(props);
        
        this.state = { 
            component : 'Candidates'
        }
        this.selectComponent = this.selectComponent.bind(this);
      }
    selectComponent(event){ 
        
       
        event.preventDefault();
        
        this.setState({component: event.target.innerText});
    }
    componentDidMount()
    {
        this.validateLogin()
    }
    handleLogout()
    {
        localStorage.removeItem('token');
        window.location = "/login"
    }
    validateLogin()
    {
       
        if(!localStorage.getItem("token"))
        {
            window.location = "/login";
        }
        
    }
    render()
    {  
 
        let toRender = null;
        switch(this.state.component)
        {
          case "Candidates":
            toRender = < AddCandidate/>
          break;
          case "Stats Source":
            toRender = < AddStatsSource />
            break;
          case "Stats":
            toRender = < StatsList />
            break;
          default:
            toRender = <AddCandidate/>
        }
    
    
        return (
              <div>
                  <Navbar bg="dark" variant="dark">
                    <Container>
                    <Nav className="me-auto" >
                            
                                <NavDropdown title="Add Records" id="basic-nav-dropdown"  >
                                    <NavDropdown.Item  onClick = {this.selectComponent} >Candidates</NavDropdown.Item>
                                    <NavDropdown.Item  >County</NavDropdown.Item>
                                    <NavDropdown.Item onClick = {this.selectComponent}>Stats Source</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick = {this.selectComponent}>Stats</NavDropdown.Item>
                                    <NavDropdown.Item >Party</NavDropdown.Item>
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
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        Signed in as: <a onClick={this.handleLogout} href="#"> {localStorage.getItem("username")} </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>    
                {toRender}
              </div>  
        )
    }
}
export default BackendDashboard;