import { Button,  Row, Col, Image,Table } from 'react-bootstrap';
import React, { Component } from 'react';  
import './profilestyle.css';
import profilepic from './resources/images/smallprofile.png'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
class CandidateItem extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            candidate : props.candidate,
            rootapiurl : process.env.REACT_APP_UI.BASE_URL,
            rootimgurl : process.env.REACT_APP_UI.BASE_URL+'/static/'
          };

      }
    render()
    {   
        return (<tr>
            <td>{this.props.ids + 1}</td>
            <td><Image src={ this.state.candidate.imageurl.trim() === "" ?  profilepic : this.state.rootimgurl+this.state.candidate.imageurl } style={{width:"110px", height:"110px"}}/></td>
            <td>{this.state.candidate.fullnames}</td>
            <td style={{ width : "200px"}}>{this.state.candidate.party.name}</td>
            <td >{  this.state.candidate.deputy == null ? '' : this.state.candidate.deputy.fullnames }</td>
            <td style={{ width : "200px"}}>{this.state.candidate.party.slogan}</td>
            <td>{this.state.candidate.age}</td>

        </tr>)
    }

}
export default CandidateItem