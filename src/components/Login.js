import React, { Component } from 'react';  

import {  Row, Col, Card, Button, Stack, Form, FloatingLabel } from 'react-bootstrap';
class Login extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
            usernm : '',
            pwd : '',
            rootapiurl : process.env.REACT_APP_UI.BASE_URL
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkIsLoggedIn();
    }
    checkIsLoggedIn()
    {
        if(localStorage.getItem("token"))
        {
            window.location = "/backend";
        }
    }
    handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({
            [name]: value,
            
        });
      }
    
    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.loginAccount()
      }
    loginAccount()
    {
        var data = new FormData();
        data.append("username", this.state.usernm);
        data.append("password", this.state.pwd);
        fetch(this.state.rootapiurl+"/token", { method: "POST", body: data }).then(res => res.json()).then(
            (result) => {
               this.validateAccess(result);
            },
            (error) => {
               this.setState({
                  isLoaded: false,
                  error
               });
            }
         )
    }
    validateAccess(responseObj)   
    { 
        if(responseObj.hasOwnProperty("access_token"))
        {
            localStorage.setItem("token", responseObj.access_token)
            localStorage.setItem("username", responseObj.user.username)
            window.location = "/backend";

        }
        else
        {
            alert("Unable to login")
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
                                    <Form onSubmit={this.handleSubmit}>
                                    <FloatingLabel controlId="userid" label="Username" className="mb-3">
                                         <Form.Control type="text" name="usernm" value={this.state.usernm} onChange={this.handleChange}  />
                                    </ FloatingLabel>
                                    <FloatingLabel controlId="passId" label="Password">
                                         <Form.Control type="password" name="pwd" value={this.state.pwd} onChange={this.handleChange} />
                                    </FloatingLabel>

                                    <Form.Control type='submit' value="Login" style={{ marginTop : '10px' }}  />
                                    </Form>
                                        
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col></Col>

        </Row>
            
        )
    }
}
export default Login;