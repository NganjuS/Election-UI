import React, { Component } from 'react';  
import {  Row, Col, Stack, Modal, Button,Form, Table } from 'react-bootstrap';
class Governors extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
            show : true,
            countylist : [],
            rootapiurl : process.env.REACT_APP_UI.BASE_URL,
            rootimgurl : process.env.REACT_APP_UI.BASE_URL+'/static/'
        }
      }
      setShow(val)
      {
        
        this.setState( 
          { show : val}
          
        )
     }
    componentDidMount() { 
        this.fetchRemoteItems(); 
     }
     fetchRemoteItems() {
        fetch(this.state.rootapiurl+"/counties/")
           .then(res => res.json())
           .then(
              (result) => {
                 this.setItems(result)
              },
              (error) => {
                 this.setState({
                    isLoaded: false,
                    error
                 });
              }
           )
     }
     setItems(ctlist) { 
       this.setState({countylist : ctlist });
     }
    render()
    {   
        const handleClose = () => this.setShow(false);
        const handleShow = () => this.setShow(true);
        return (
            
            <div>
                <Table bordered hover variant="dark">
                    <thead >
                        <tr style={{ color : '#007FFF' }}>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Full Names</th>
                            <th>Deputy</th>
                            <th>Party</th>
                            <th>County</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
                <Modal show={this.state.show} onHide={handleClose} backdrop="static"
        keyboard={false} centered>  
            <Modal.Header closeButton>
              <Modal.Title>Select County</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Select>
                  <option>All</option>
                  {this.state.countylist.map((county)=> (<option value={county.id} key={county.id}><b>{county.name} - {county.code}</b></option>))}
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
export default Governors;