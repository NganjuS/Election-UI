import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';  
import {  Row, Col, Stack, Modal, Button,Form } from 'react-bootstrap';
import SelectionModal from './SelectionModal';
import Countdown from "react-countdown";
class Layout extends Component {  
    constructor(props) {
      super(props);
      this.state = {
        rootapiurl : process.env.REACT_APP_UI.BASE_URL,
        electiondate : props.eta == null ? new Date() : new Date(props.eta.electiondate)
      }
        console.log(props.eta == null ? "" : props.eta.electiondate)
      }
      
      render()
      {
        
        return (
        <div className="footer fixed-bottom" style={{ backgroundColor : "#212529"}}>
          
          <Stack direction="horizontal" gap={3}>
            <div ><Link to="/" style={{ marginLeft : "10px",  textDecoration: 'none', fontWeight : 'bold' }}>Presidential </Link></div>
            <div className="vr" style={{ color :"orange", fontWeight : 'bold' }}/>
            <div> <Link to="/governors" style={{ marginLeft : "10px", textDecoration: 'none', fontWeight : 'bold',  }} >Governors</Link> </div>
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
            <div style={{  color :"orange", fontWeight : 'bold' }} >Days Remaining : <Countdown date={this.state.electiondate} /></div>
        </Stack>
       
        </div>
      )
    }
  }

export default Layout;