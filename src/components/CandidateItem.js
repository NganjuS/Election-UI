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
            candidate : props.candidate
          };

      }
    render()
    {   
        return (<tr>
            <td>{this.props.ids + 1}</td>
            <td><Image src={'http://localhost:8000/static/'+this.state.candidate.imageurl} style={{width:"130px", height:"130px"}}/></td>
            <td>{this.state.candidate.fullnames}</td>
            <td style={{ width : "200px"}}>{this.state.candidate.party.name}</td>
            <td style={{ width : "200px"}}>{this.state.candidate.party.slogan}</td>
            <td>{this.state.candidate.age}</td>

        </tr>)
    }

}
export default CandidateItem