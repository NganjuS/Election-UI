import { Button,  Row, Col, Card,  Badge,Table ,Modal, ToastContainer, Toast, Form} from 'react-bootstrap';
import React, { Component } from 'react';  
class AddCandidate extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
            rootapiurl : process.env.REACT_APP_UI.BASE_URL,
            show : false,
            openeditwindow : false,
            message : '',
            action : 'add',
            positions : [],
            counties : [],
            parties : [],
            candidateslist : [],
            candidateprof : {},
            candidatetemplate : {
                "fullnames": "",
                "short_code": "",
                "age": 0,
                "weight": 1,
                "dateofbirth": "",
                "imageurl": "",
                "is_active": "",
                "slogan": "",
                "color": "",
                "position_id": 0,
                "party_id": 0,
                "county_id": null,
                "deputy_id": null,
                "id": 0,
              }
                       
        }
        
        this.toggleEditWindow = this.toggleEditWindow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetData = this.resetData.bind(this);
        this.editCandidate = this.editCandidate.bind(this);
        this.removeCandidate = this.removeCandidate.bind(this);
        this.resetData();

      }

      componentDidMount() { 
        this.fetchRemoteItems(); 
     }
     resetData()
     {
        this.setState( {candidateprof : this.state.candidatetemplate}) ;
     }
     showAlert(val)
     {
        this.setState({show : val});

     }
     handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        let candi = this.state.candidateprof;
        candi[name] = value;
         this.setState({

            candidateprof : candi
            
        });
      }
     toggleEditWindow(val)
     {
       
       this.setState( { openeditwindow : val, action : 'add'  })
     }
     removeCandidate(evt)
     {
        fetch(this.state.rootapiurl+"/candidate/remove?id="+evt.target.dataset.id ,{method : "DELETE" ,
            headers: { accept: 'application/json', 'Content-Type' : 'application/json', 
        Authorization: 'Bearer '+localStorage.getItem("token") }}
        ).then(res => res.json() ).then(
            (result) => {
               console.log(result)
               this.fetchRemoteItems(); 
            },
            (error) => {
               this.setState({
                  isLoaded: false,
                  error
               });
            }
         )
     }
     editCandidate(evt)
     {
       const candidt = this.state.candidateslist.filter(candi => candi.id ==  evt.target.dataset.id);
       this.setState({ candidateprof : candidt[0] , openeditwindow : true, action : 'update' })
     }
     displayData(reqsts, candidatedata)
     {

        if(reqsts > 400)
        {
            this.setState({show : true, message : candidatedata.detail});
        }
        else
        {
            this.setState({ candidateslist : candidatedata });
        }
        
     }    
     handleSubmit(event) {
        event.preventDefault();
        this.saveCandidate();
      }
      saveCandidate()
      {
        const mthd = this.state.action == "add" ? "POST": "PUT" ;
        fetch(this.state.rootapiurl+"/candidate/"+this.state.action ,
        { method: mthd, body: JSON.stringify(this.state.candidateprof) , headers: { accept: 'application/json', 'Content-Type' : 'application/json', Authorization: 'Bearer '+localStorage.getItem("token") }}

        ).then(res => {  return {"status" : res.status ,"data" : res.json()} } ).then(
            (result) => {
                result.data.then((datam) => {
                    if(result.status > 400)
                    {
                        if(result.status == 401)
                        {
                            localStorage.removeItem('token');
                            window.location = "/login"
                        }
                        if(Array.isArray(datam.detail))
                        {
                            
                            this.setState({show : true, message : datam.detail[0].msg});
                           
                        }
                        else
                        {

                            this.setState({show : true, message : datam.detail});
                        }
                        
                    }
                    else if(result.status === 200)
                    {
                        console.log('no error', datam)
                        this.setState({show : true,openeditwindow : false, message : "Posted successfully"});
                        this.resetData();
                        this.fetchRemoteItems(); 
                    }
                });
                
               
            },
            (error) => {
                this.setState({show : true, message : error});
               console.log(error)
            }
         )
      }
      
     fetchRemoteItems() {
        //
        //fetch candidates
        fetch(this.state.rootapiurl+"/getcandidates/" 
        ).then(res => { return {"status" : res.status ,"data" : res.json()} }).then(
            (result) => {

              result.data.then((datam) => this.displayData(result.status,datam));
               
            },
            (error) => {
               this.setState({
                  isLoaded: false,
                  error
               });
            }
         )
         //fetch position
         fetch(this.state.rootapiurl+"/positions/" 
        ).then(res => res.json() ).then(
            (result) => {

             this.setState({
                positions : result
             })
               
            },
            (error) => {
               this.setState({
                  isLoaded: false,
                  error
               });
            }
         )
         //fetch county
         fetch(this.state.rootapiurl+"/counties/" 
        ).then(res => res.json() ).then(
            (result) => {

             this.setState({
                counties : result
             })
               
            },
            (error) => {
               this.setState({
                  isLoaded: false,
                  error
               });
            }
         )
         //fetch party
         fetch(this.state.rootapiurl+"/parties/" 
        ).then(res => res.json() ).then(
            (result) => {

             this.setState({
                parties : result
             })
               
            },
            (error) => {
               this.setState({
                  isLoaded: false,
                  error
               });
            }
         )

     }
     
    render()
    {   
        const rowlist = this.state.candidateslist.map((candidate) => {

        return <tr key={candidate.id}>
            <td>{candidate.fullnames}</td>
            <td>{candidate.party.name}</td>
            <td></td>
            <td></td>
            <td><Button variant="info" onClick={ () => this.toggleEditWindow(true)  }>+</Button></td>
            <td><Button variant="primary" onClick={this.editCandidate} data-id={candidate.id}>E</Button></td>
            <td><Button variant="danger" onClick={this.removeCandidate} data-id={candidate.id}>D</Button></td>
        </tr>})
        const deputy = this.state.candidateslist.map((candi) => <option key={candi.id} value={candi.id} >{candi.fullnames}</option>)
        const postn = this.state.positions.map((position) => <option key={position.id}  value={position.id} >{position.name}</option>)
        const cnty = this.state.counties.map((county) => <option key={county.id} value={county.id} >{county.name}</option>)
        const prty = this.state.parties.map((party) => <option key={party.id} value={party.id} >{party.name}</option>)
    
    const handleClose = () => this.toggleEditWindow(false);
        return (
          <div>


                <Table bordered hover variant="dark" style={{ margintop : "10px" }}>
                    <thead>
                        <tr style={{ color : '#007FFF' }}>                          
                            <th>Full names</th>
                            <th>Party</th>
                            <th>Position</th>
                            <th>Deputy</th>
                            <th>Add</th>
                            <th>Edit</th>
                            <th>Del</th>
                        </tr>
                    </thead>
                    <tbody>
                    { rowlist }
                       
                    </tbody>
                </Table>
                <ToastContainer position="top-end" >
                    <Toast show={this.state.show} onClose={() => this.showAlert(false)} delay={3000} autohide>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Message</strong>
                            <small></small>
                        </Toast.Header>
                        <Toast.Body>{this.state.message}</Toast.Body>
                    </Toast>
                 </ToastContainer>
                              
                 <Modal size="lg" 
 show={this.state.openeditwindow} onHide={handleClose} backdrop="static" keyboard={false} centered>  
                    <Modal.Header closeButton>
                    <Modal.Title>Add Candidate</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>  
                        <Row>
                            <Col>
                            <Form.Group className="mb-3" >
                                <Form.Label>Full Names</Form.Label>
                                <Form.Control type="text"  name="fullnames" value={this.state.candidateprof.fullnames} onChange={this.handleChange} required/>
                                
                            </Form.Group> 
                            </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Short Code</Form.Label>
                                <Form.Control type="text"  name="short_code" value={this.state.candidateprof.short_code} onChange={this.handleChange} required/>
                            </Form.Group> 
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Group className="mb-3" >
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number"  name="age" value={this.state.candidateprof.age} onChange={this.handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" >
                                <Form.Label>DOB</Form.Label>
                                <Form.Control type="date"  name="dateofbirth" value={this.state.candidateprof.dateofbirth} onChange={this.handleChange}/>
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Image Url</Form.Label>
                                    <Form.Control type="text"  name="imageurl" value={this.state.candidateprof.imageurl} onChange={this.handleChange} />
                                </Form.Group>
                             </Col>
                             <Col>
                                <Form.Group className="mb-3" >
                                    
                                    <Form.Check 
                                        type="switch"
                                        id="custom-switch"
                                        label="Is Active"
                                        name ="is_active"
                                        value={this.state.candidateprof.is_active} onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Group className="mb-3" >
                                <Form.Label>Slogan</Form.Label>
                                <Form.Control type="text"  name="slogan" value={this.state.candidateprof.slogan} onChange={this.handleChange}/>
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group className="mb-3" >
                                <Form.Label>Color</Form.Label>
                                <Form.Control type="text"  name="color" value={this.state.candidateprof.color} onChange={this.handleChange} />
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Position</Form.Label>
                                <Form.Select  value={this.state.candidateprof.position_id} onChange={this.handleChange} name="position_id">
                                <option>None</option>
                                    {postn}
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label>Party</Form.Label>
                                <Form.Select  value={this.state.candidateprof.party_id} onChange={this.handleChange} name="party_id">
                                <option >None</option>
                                    {prty}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>County</Form.Label>
                                <Form.Select  value={this.state.candidateprof.county_id} onChange={this.handleChange} name="county_id">
                                <option value="0">None</option>
                                   {cnty}
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label>Deputy</Form.Label>
                                <Form.Select  value={this.state.candidateprof.deputy_id} onChange={this.handleChange} name="deputy_id">
                                    <option value="0">None</option>
                                    {deputy}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col><Button variant="primary" type='submit' style={{ marginTop : "10px"}}>
                             Save
                         </Button></Col>
                            <Col></Col>
                        
                        
                         </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                   
                    <Button variant="primary" onClick={handleClose}>
                             Close
                </Button>
                    </Modal.Footer>
                </Modal>
            
          </div> 
              
        )
    }
}
export default AddCandidate;