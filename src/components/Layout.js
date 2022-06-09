import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';  
import {  Row, Col, Stack, Modal, Button,Form } from 'react-bootstrap';
import SelectionModal from './SelectionModal';
class Layout extends Component {  
    constructor(props) {
        super(props);
      }

      render()
      {
        
        return (
        <div className="footer fixed-bottom" style={{ backgroundColor : "#212529"}}>
          
          <Stack direction="horizontal" gap={3}>
            <div ><Link to="/" style={{ marginLeft : "10px",  textDecoration: 'none', fontWeight : 'bold' }}>Presidential </Link></div>
            <div className="vr" style={{ color :"orange", fontWeight : 'bold' }}/>
            <div  > <Link to="/governors" style={{ marginLeft : "10px", textDecoration: 'none', fontWeight : 'bold',  }} >Governors</Link> </div>
            <div className="vr" style={{  color :"orange", fontWeight : 'bold' }} />
            <div><Link to="/modal" style={{ textDecoration: 'none', fontWeight : 'bold' }} >Senators</Link></div>
            <div className="vr" style={{  color :"orange", fontWeight : 'bold' }} />
            <div><Link to="/governors" style={{ textDecoration: 'none', fontWeight : 'bold' }}>MPs</Link></div>
            <div className="vr" style={{  color :"orange", fontWeight : 'bold' }} />
            <div><Link to="/governors" style={{ textDecoration: 'none', fontWeight : 'bold' }}>Women Rep</Link></div>
            <div className="vr" style={{  color :"orange", fontWeight : 'bold' }} />
            <div><Link to="/governors" style={{ textDecoration: 'none', fontWeight : 'bold' }}>MCA</Link></div>
            <div className="vr" style={{  color :"orange", fontWeight : 'bold' }} />
            <div><Link to="/governors" style={{ textDecoration: 'none', fontWeight : 'bold' }}>Contact Us</Link></div>
            <div className="vr" style={{  color :"orange", fontWeight : 'bold' }} />
        </Stack>
       
        </div>
      )
    }
  }

export default Layout;