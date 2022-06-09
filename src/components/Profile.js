import { Button,  Row, Col, Card,  Badge,Table } from 'react-bootstrap';
import React, { Component } from 'react';  
import './profilestyle.css';
import profilepic from './resources/images/smallprofile.png'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
class Profile extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
            rootapiurl : process.env.REACT_APP_UI.BASE_URL,
            rootimgurl : process.env.REACT_APP_UI.BASE_URL+'/static/',
            
        }

      }
      componentDidMount() { 
        this.fetchRemoteItems(); 
     }
     fetchRemoteItems() {
        fetch(this.state.rootapiurl+"/getcandidate/?codestr=RAO")
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
     setItems(cand) { 
       this.setState({popularcand : cand });
     }
    render()
    {   
        
        return (
            <Card style={{ width: '22rem' }}  bg="dark"  >
                <Card.Header>
                <Row>
                    <Col md="auto" className='mostpopular' >Most Popular Candidate</Col>
                    
                </Row>
            </Card.Header>
            <Card.Img variant="bottom" src={ this.state.popularcand ? this.state.rootimgurl + this.state.popularcand.imageurl : profilepic} style={{width:"350px", height:"300px"}}   />
            <Card.Body>
                <Table bordered hover size="sm" variant="dark">
                    <tr><td className='labelssty'>Full Name : </td><td className='labeldisplay' >{this.state.popularcand ? this.state.popularcand.fullnames : this.state.defname}</td></tr>
                    <tr><td className='labelssty'>Party : </td><td className='labeldisplay' >{ this.state.popularcand ? this.state.popularcand.party.name : "" }</td></tr>
                    <tr><td className='labelssty'>Coalition : </td><td className='labeldisplay' >{ this.state.popularcand ? this.state.popularcand.coalition : ""}</td></tr>
                    <tr><td className='labelssty'>Winning Possibility : </td><td className='labeldisplay' ><Rater total={5} rating={3} /></td></tr>
                    <tr><td className='labelssty'>Party Motto : </td><td className='labeldisplay' >{ this.state.popularcand ? this.state.popularcand.party.slogan : "" }</td></tr>
                </Table>
             
            </Card.Body>
            </Card>
        )
    }
}
export default Profile;