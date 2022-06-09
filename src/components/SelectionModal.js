import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';  
import {  Row, Col, Stack, Modal, Button,Form } from 'react-bootstrap';

class SelectionModal extends Component {  
  constructor(props) {
      super(props);
      this.state = { 
        show : this.props.show,
      }
    }
    setShow(val)
    {
      
      this.setState(

        { show : val}
      )
    }
    render()
    {
        const handleClose = () => this.setShow(false);
        const handleShow = () => this.setShow(true);
          return (
            <div>
            
            <Modal show={this.state.show} onHide={handleClose} backdrop="static"
        keyboard={false} centered>  
            <Modal.Header closeButton>
              <Modal.Title>Select County</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Select>
                  <option>Test</option>
                  <option>Test 1</option>
              </Form.Select>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Show
              </Button>
            </Modal.Footer>
            </Modal>
            </div>
        )
    }
}
export default SelectionModal;