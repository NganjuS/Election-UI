import { Button,  Row, Col, Image,Table } from 'react-bootstrap';
import React, { Component } from 'react';  
import './profilestyle.css';
import profilepic from './resources/images/smallprofile.png'
import Rater from 'react-rater'
import CandidateItem from './CandidateItem'
import 'react-rater/lib/react-rater.css'
class ProfileList extends Component {  
    constructor(props) {
        super(props);
        this.state = {  listofcandidts : [] }
       
      }
    componentDidMount() { 
        this.fetchRemoteItems(); 
     }
     fetchRemoteItems() {
        fetch("http://localhost:8000/getcandidates")
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
     setItems(candLists) { 
        // console.log(candLists)
       this.setState({
       listofcandidts : candLists,
    isLoaded: true
     });
     }
    render()
    {   
        const listCandidates  = this.state.listofcandidts.map( (candidateobj, idx) => < CandidateItem key={idx} candidate={candidateobj} ids={idx} /> );
        return (
            <Table bordered hover variant="dark">
            <thead>
            <tr style={{ color : '#007FFF' }}>
                <th>#</th>
                <th>Photo</th>
                <th>Full Name</th>
                <th>Coalition</th>
                <th>Slogan</th>
                <th>Age</th>

            </tr>
            </thead>
            <tbody>
               {listCandidates}
            </tbody>
            </Table>
        )
    }

}
export default ProfileList;