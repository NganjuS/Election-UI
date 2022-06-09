import React, { Component } from 'react';  
import {  Row, Col, Card, Button, Stack, Form, FloatingLabel } from 'react-bootstrap';
class Login extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
        }
      }

    render()
    {   
        
        return (<Row>

                        <Col></Col>
                        <Col>
                        <Card bg="success" variant="dark" border="primary" style={{ marginTop : "100px" }}>
                        <Card.Header><Card.Title>SEDNA LABS LOGIN</Card.Title></Card.Header>
                        <Card.Body>
                            <Stack gap={3}>
                            <div >
                                <FloatingLabel
                                controlId="userid"
                                label="Username"
                                className="mb-3"
                                >
                                <Form.Control type="text"  />
                            </FloatingLabel>
                            </div>
                            <div>
                            
                            <FloatingLabel controlId="passId" label="Password">
                                <Form.Control type="password"  />
                            </FloatingLabel>

                            </div>

                            <div><Button variant="primary">Login</Button></div>
                            </Stack>
                            
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col></Col>

        </Row>
            
        )
    }
}
export default Login;