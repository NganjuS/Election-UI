import React, { Component } from 'react';  
import {  Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
class BackendNav extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
        }
      }
    handleLogout()
    {
        localStorage.removeItem('token');
        window.location = "login"
    }
    render()
    {   
        
        return (
               
            
                 <div></div>      
                        
                    
        )
    }
}
export default BackendNav;