import React, { Component } from 'react';  
import {  Row, Col } from 'react-bootstrap';
import Profile from './Profile'
import ProfileList from './ProfilesList'
import AppNav from './AppNav'
import SelectionModal from './SelectionModal';
class Presidential extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
        }

      }
    render()
    {   
        
        return (
          <div>
          <AppNav defsett={this.props.defsett}/>
            <Row  className="mt-2" >
             
                                <Col md="auto">

                                     <Profile  />
                                </Col>
                                <Col>
                                  <ProfileList />
                                          
                                </Col>
                            </Row></div>
        )
    }
}
export default Presidential;
