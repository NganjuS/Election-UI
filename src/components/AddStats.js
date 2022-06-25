import React, { Component } from 'react';  
import {  Navbar, Container, Nav, NavDropdown, Form , Button, Card, Row, Col, ToastContainer, Toast } from 'react-bootstrap';
class AddStats extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
          rootapiurl : process.env.REACT_APP_UI.BASE_URL,
          message : "",
          show : false,
          candidateslist : [],
          statssource : [],
          candidate_id : 0,
          batchname :  "",
          batchdate : Date(),
          votes : 0,
          statssource_id : 0

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveStatsData = this.saveStatsData.bind(this);

      }
      componentDidMount() { 
        this.fetchRemoteItems(); 
     }
     showAlert(val)
      {
          this.setState({show : val});

      }
      handleSubmit(event) {
        event.preventDefault();
        this.saveStatsData();
      }
      handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

         this.setState({

            [name] : value
            
        });
      }
      fetchRemoteItems() {
        //presidential list
         fetch(this.state.rootapiurl+"/getcandidatesbyposition?positionid=1" ).then(res => res.json() ).then(
            (result) => {

             this.setState({
              candidateslist : result
             })
               
            },
            (error) => {
               this.setState({
                  isLoaded: false,
                  error
               });
            }
         )
         //stats source
         fetch(this.state.rootapiurl+"/statssource/" ).then(res => res.json() ).then(
          (result) => {

           this.setState({
            statssource : result
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
      saveStatsData()
      {
        let srcobj = {
          "candidate_id": this.state.candidate_id,
          "batchname": this.state.batchname,
          "batchdate": this.state.batchdate,
          "votes": this.state.votes,
          "statssource_id": this.state.statssource_id
        }
        console.log(srcobj);
        fetch(this.state.rootapiurl+"/statsdata/" ,
        { method: "POST", body: JSON.stringify(srcobj) , headers: { accept: 'application/json', 'Content-Type' : 'application/json', Authorization: 'Bearer '+localStorage.getItem("token") }}

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
                        this.setState({show : true, message : "Posted successfully"});
                    }
                });
                
               
            },
            (error) => {
                this.setState({show : true, message : error});
               console.log(error)
            }
         )
      }

    render()
    {   
      const candidates = this.state.candidateslist.map((candi) => <option key={candi.id} value={candi.id} >{candi.fullnames}</option>)
      const sourc = this.state.statssource.map((src) => <option key={src.id} value={src.id} >{src.code}</option>)
        return (
          <div>
                <Row style={{ marginTop: "20px"}}>
                  <Col></Col>
                  <Col>
                  
                      <Card bg="success">
                        <Card.Header>Add Stats Data</Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" >
                                              <Form.Label>Candidate</Form.Label>
                                              <Form.Select  value={this.state.candidate_id } onChange={this.handleChange} name="candidate_id">
                                <option>None</option>
                                    {candidates}
                                </Form.Select>                                              
                              </Form.Group> 
                              <Form.Group className="mb-3" >
                                              <Form.Label>Stats Source</Form.Label>
                                              <Form.Select  value={this.state.statssource_id} onChange={this.handleChange} name="statssource_id">
                                <option>None</option>
                                    {sourc}
                                </Form.Select>                                              
                              </Form.Group> 
                              <Form.Group className="mb-3" >
                                              <Form.Label>Batch Name</Form.Label>
                                              <Form.Control type="text"  name="batchname" value={this.state.batchname} onChange={this.handleChange} required/>
                                              
                              </Form.Group> 
                              <Form.Group className="mb-3" >
                                              <Form.Label>Batch Date</Form.Label>
                                              <Form.Control type="Date"  name="batchdate" value={this.state.batchdate} onChange={this.handleChange} required/>
                                              
                              </Form.Group>
                              <Form.Group className="mb-3" >
                                              <Form.Label>Votes</Form.Label>
                                              <Form.Control type="number"  name="votes" value={this.state.votes} onChange={this.handleChange} required/>
                                              
                              </Form.Group>
                              <Button variant="primary" type='submit' style={{ marginTop : "10px"}}>
                                        Save
                                    </Button>
                            </Form>
                      </Card.Body>

                    </Card>
              </Col>
              <Col></Col>
              </Row>
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
         </div>
            
                     
                        
                    
        )
    }
}
export default AddStats;