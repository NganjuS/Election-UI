import { Button,  Row, Col, Card,  Badge,ProgressBar } from 'react-bootstrap';
import React, { Component } from 'react';  
import profilepic from './resources/images/smallprofile.png'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
class ProfileOther extends Component {  
    constructor(props) {
        super(props);
        this.state = this.props.candidate;
      }
    render()
    {   
        return (
            <Card style={{ width: '14rem' }}  border="primary" bg="secondary" variant="light" text='light' >
                <Card.Header>
                    <Row>

                    <Col><Badge bg="primary" style={{ padding : '5px'} }><b style={{ fontSize:"10px"}}>Name </b></Badge> : <Badge bg="info" style={{ padding : '5px', fontSize:"10px"} }> { this.state.fullname }</Badge></Col>
                    </Row>

                    

                </Card.Header>
            <Card.Img variant="bottom" src={profilepic}   />
            <Card.Body>

      
             <Row >
                 <Col><Button href="#" size="sm" style={{ paddingTop : '1px'} } variant="warning">See More ....</Button></Col>
             </Row>
            </Card.Body>
            </Card>
        )
    }
}
export default ProfileOther;