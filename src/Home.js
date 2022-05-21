import {  Container, Row, Col, Nav, Navbar, ProgressBar, Table } from 'react-bootstrap';
import React, { Component } from 'react'; 
import Profile from './Profile'
import ProfileOther from './ProfileOther'
class Home extends Component { 
    constructor(props) {
        super(props);
        this.state = {
         now : 60,
         dt :   [{
             id: 1,
          fullname : "John T Kirk",
          party : "Jubilee",
          coalition : "Azimio",
          winpossibility : 3,
          partymotto : "Usawa kwa wote",
          imageurl : ""
        },{
            id: 2,
            fullname : "John T Kirk",
            party : "Jubilee",
            coalition : "Azimio",
            winpossibility : 3,
            partymotto : "Usawa kwa wote",imageurl : ""
          },{
            id: 3,
            fullname : "John T Kirk",
            party : "Jubilee",
            coalition : "Azimio",
            winpossibility : 3,
            partymotto : "Usawa kwa wote",imageurl : ""
          },{
            id: 4,
            fullname : "John T Kirk",
            party : "Jubilee",
            coalition : "Azimio",
            winpossibility : 3,
            partymotto : "Usawa kwa wote",imageurl : ""
          },
          {
                      id: 5,
                      fullname : "John T Kirk",
                      party : "Jubilee",
                      coalition : "Azimio",
                      winpossibility : 3,
                      partymotto : "Usawa kwa wote",imageurl : ""
                    },{
                      id: 6,
                      fullname : "John T Kirk",
                      party : "Jubilee",
                      coalition : "Azimio",
                      winpossibility : 3,
                      partymotto : "Usawa kwa wote",imageurl : ""
                    },{
                      id: 7,
                      fullname : "John T Kirk",
                      party : "Jubilee",
                      coalition : "Azimio",
                      winpossibility : 3,
                      partymotto : "Usawa kwa wote",imageurl : ""
                    }]};
      } 

    render()
    {
        const listCandidates  = this.state.dt.map( (candidateobj) => <Col style={{ marginTop : "5px" }}>< ProfileOther candidate={candidateobj}  /></Col>
             );
        return (

                    <div>
                        <Navbar bg="dark" variant="dark">
                      
                        
                            </Navbar>
                            <Row className="mt-3 " >
                                <Col md="auto">
                                     <Profile />
                                </Col>
                                <Col>
                                        
                                            <Row>
                                            {listCandidates}
                                            </Row>
                                    
                                </Col>
                            </Row>

                    </div>
            )
    }
}
export default Home;
   /*    <Row >
                              <Col>Polling Meter: <ProgressBar style={{ width : "150px"}} now={this.state.now} label={`${this.state.now}%`}/></Col>
                              <Col><ProgressBar now={this.state.now} /></Col>
                          </Row><Container>
                                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                                    <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                    </Nav>
                                </Container>*/