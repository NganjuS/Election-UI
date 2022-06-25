import React, { Component } from 'react';  
import {  Navbar, Container, Nav, NavDropdown, Form, Button, Card, Row, Col, ToastContainer, Toast } from 'react-bootstrap';
class AddStatsSource extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
          rootapiurl : process.env.REACT_APP_UI.BASE_URL,
          code : "",
          name : "",
          website : "",
          message : "",
          show : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveStatsSource = this.saveStatsSource.bind(this);
      }
      showAlert(val)
      {
          this.setState({show : val});

      }
      handleSubmit(event) {
        event.preventDefault();
        this.saveStatsSource();
      }
      handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

         this.setState({

            [name] : value
            
        });
      }
      saveStatsSource()
      {
        let srcobj = { "code" :  this.state.code ,"name" : this.state.name , "website" : this.state.website }

        fetch(this.state.rootapiurl+"/statssource/" ,
        { method: "POST", body: JSON.stringify(srcobj) , headers: { accept: 'application/json', 'Content-Type' : 'application/json', Authorization: 'Bearer '+localStorage.getItem("token") }}

        ).then(res => {  return {"status" : res.status ,"data" : res.json()} } ).then(
            (result) => {
                result.data.then((datam) => {
                    if(result.status > 400)
                    {
                        if(result.status == 401)
                        {
                            localStorage.removeItem('token');
                            window.location = "/login"
                        }
                        if(Array.isArray(datam.detail))
                        {
                            
                            this.setState({show : true, message : datam.detail[0].msg});
                           
                        }
                        else
                        {

                            this.setState({show : true, message : datam.detail});
                        }
                        
                    }
                    else if(result.status === 200)
                    {
                        console.log('no error', datam)
                        this.setState({show : true, message : "Posted successfully"});
                    }
                });
                
               
            },
            (error) => {
                this.setState({show : true, message : error});
               console.log(error)
            }
         )
      }
    render()
    {   
        
        return (
               <div>
                <Row style={{ marginTop: "20px"}}>
                  <Col></Col>
                  <Col>
                  
                      <Card bg="success">
                        <Card.Header>Add Stats Source</Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                              <Form.Group className="mb-3" >
                                              <Form.Label>Code</Form.Label>
                                              <Form.Control type="text"  name="code" value={this.state.code} onChange={this.handleChange} required/>
                                              
                              </Form.Group> 
                              <Form.Group className="mb-3" >
                                              <Form.Label>Name</Form.Label>
                                              <Form.Control type="text"  name="name" value={this.state.name} onChange={this.handleChange} required/>
                                              
                              </Form.Group>
                              <Form.Group className="mb-3" >
                                              <Form.Label>Website</Form.Label>
                                              <Form.Control type="text"  name="website" value={this.state.website} onChange={this.handleChange} required/>
                                              
                              </Form.Group>
                              <Button variant="primary" type='submit' style={{ marginTop : "10px"}}>
                                        Save
                                    </Button>
                            </Form>
                      </Card.Body>

                    </Card>
              </Col>
              <Col></Col>
              </Row>
              <ToastContainer position="top-end" >
                    <Toast show={this.state.show} onClose={() => this.showAlert(false)} delay={3000} autohide>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Message</strong>
                            <small></small>
                        </Toast.Header>
                        <Toast.Body>{this.state.message}</Toast.Body>
                    </Toast>
                 </ToastContainer>
               </div>
            
                     
                        
                    
        )
    }
}
export default AddStatsSource;