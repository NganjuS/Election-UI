import { Button,  Row, Col, Card,  Badge,ProgressBar } from 'react-bootstrap';
import React, { Component } from 'react';  
import profilepic from './resources/images/smallprofile.png'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
class Profile extends Component {  
    constructor(props) {
        super(props);
        this.state = {
          fullname : "John T Kirk",
          party : "Jubilee",
          coalition : "Azimio",
          winpossibility : "****",
          partymotto : "Usawa kwa wote",
        };
      }
    render()
    {   
        return (
            <Card style={{ width: '22rem' }}  border="primary" bg="dark" variant="light" text='light' >
                <Card.Header>
                    <Row>
                    <Col><Badge bg="primary" style={{ padding : '8px'} }><b style={{ fontSize:"12px", color:"black" }}>Name </b></Badge> : <Badge bg="info" style={{ padding : '8px'} }> { this.state.fullname }</Badge></Col>
                   <Col>party logo</Col>
                    </Row>

                </Card.Header>
            <Card.Img variant="bottom" src={profilepic}   />
            <Card.Body>

             <Row>
                 <Col><Badge bg="primary" style={{ padding : '8px'} }>Party </Badge> : <Badge bg="info" style={{ padding : '8px'} }> {this.state.party}</Badge></Col>
                 <Col><Badge bg="primary" style={{ padding : '8px'} }><b style={{ fontSize:"12px", color:"black" }}>Coalition </b> </Badge> : <Badge bg="info" style={{ padding : '8px'} }>{this.state.coalition}</Badge> </Col>
             </Row>
             <hr/>
             <Row>
                 <Col><Badge bg="primary" style={{ padding : '8px'} }>Winning Possibility </Badge> : <Badge bg="info" style={{ padding : '6px'} }><Rater total={5} rating={3} />  </Badge></Col>
             </Row>
             <hr/>
             <Row>
                 <Col><Badge bg="primary" style={{ padding : '8px'} }>Party Motto </Badge> : <Badge bg="info" style={{ padding : '8px'} }> {this.state.partymotto}</Badge></Col>
             </Row>
             <hr/>
             <Row >
                 <Col><Button href="#" size="sm">See More ....</Button></Col>
             </Row>
            </Card.Body>
            </Card>
        )
    }
}
export default Profile;