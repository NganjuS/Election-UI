import React, { Component } from 'react';  
import profilepic from './resources/images/smallprofile.png'
import {  Row, Col, Stack, Modal, Button,Form, Table, Image } from 'react-bootstrap';
class Governors extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
            show : true,
            countylist : [],
            candidateslist : [],
            position :  3,
            countyid : 0,
            rootapiurl : process.env.REACT_APP_UI.BASE_URL,
            rootimgurl : process.env.REACT_APP_UI.BASE_URL+'/static/'
        }
        this.handleChange = this.handleChange.bind(this)
        this.showSelected = this.showSelected.bind(this)
        this.setCandiList = this.setCandiList.bind(this)
      
      }
      handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
         this.setState({

            [name] : value
            
        });
      }
      showSelected(evt)
      {
        this.setShow(false);
        this.fetchSelected(); 
      }
      setShow(val)
      {
        
        this.setState( 
          { show : val}
          
        )
     }
    componentDidMount() { 
        this.fetchRemoteItems(); 
     }
     fetchRemoteItems() {
        fetch(this.state.rootapiurl+"/counties/")
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
     fetchSelected()
     {
      //fetch candidate
          fetch(this.state.rootapiurl+`/getcandidatesfilter?positionid=${this.state.position}&countyid=${this.state.countyid}`)
          .then(res => res.json())
          .then(
            (result) => {

                this.setCandiList(result)
            },
            (error) => {
                this.setState({
                  isLoaded: false,
                  error
                });
            }
          )


     }
     setCandiList(cndlist) { 

      this.setState({candidateslist : cndlist});
    }
     setItems(ctlist) { 
       this.setState({countylist : ctlist });
     }
    render()
    {   
        const handleClose = () => this.setShow(false);
       
        const rowlist = this.state.candidateslist.map((candidate, idx) => {

          return <tr key={candidate.id}>
              <td>{idx+1}</td>
              <td><Image style={{width:"100px", height:"100px"}} src={ candidate.imageurl.trim() === "" ?  profilepic : this.state.rootimgurl+candidate.imageurl } /> </td>
              <td>{candidate.fullnames}</td>
              <td>{candidate.deputy == null ? '' :  candidate.deputy.fullnames }</td>
              <td>{candidate.party.name}</td>
              <td>{candidate.county.name}</td>
              <td>{candidate.age}</td>


          </tr>})
        return (
            
            <div>
                <Table bordered hover variant="dark">
                    <thead >
                        <tr style={{ color : '#007FFF' }}>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Full Names</th>
                            <th>Deputy</th>
                            <th>Party</th>
                            <th>County</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                      { "No data found " && rowlist }
                    </tbody>
                </Table>
                <Modal show={this.state.show} onHide={handleClose} backdrop="static"
        keyboard={false} centered>  
            <Modal.Header closeButton>
              <Modal.Title>Select County</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Select  value={this.state.countyid} onChange={this.handleChange} name="countyid">
                  <option value="0">All</option>
                  {this.state.countylist.map((county)=> (<option value={county.id} key={county.id}><b>{county.name} - {county.code}</b></option>))}
              </Form.Select>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.showSelected}>
                Show
              </Button>
            </Modal.Footer>
            </Modal>
            </div>
        )
    }
}
export default Governors;