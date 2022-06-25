import { Button,  Row, Col, Card,  Badge,Table } from 'react-bootstrap';
import React, { Component } from 'react';  

class Profile extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
            rootapiurl : process.env.REACT_APP_UI.BASE_URL,
            datalist : []
            
        }
        this.addStats = this.addStats.bind(this);

      }
      componentDidMount() { 
        this.fetchRemoteItems(); 
     }
     fetchRemoteItems() {
        fetch(this.state.rootapiurl+"/statsdata/")
           .then(res => res.json())
           .then(
              (result) => {
                this.setState({ datalist : result})
              },
              (error) => {
                 this.setState({
                    isLoaded: false,
                    error
                 });
              }
           )
     }
    addStats()
    {
        window.location = "/addstats"
    }
    render()
    {   
        const rowlist = this.state.datalist.map((stats, idx) => {

            return <tr key={stats.id}>
                <td>{idx+1}</td>
                <td>{stats.batchname}</td>
                <td>{stats.batchdate}</td>
                <td>{stats.datacandidate.fullnames}</td>
                <td>{stats.statssource.code}</td>
                <td>{stats.votes}</td>
            </tr>})

        return (
            <div>
                <Button variant="info" onClick={ () => this.addStats()  } style={{ margin : "10px" }}>Add Stats</Button>
                <Table bordered hover variant="dark" style={{ margintop : "10px" }}>
                    <thead>
                        <tr style={{ color : '#007FFF' }}>  
                            <th>#</th>                        
                            <th>Batch </th>
                            <th>Batch Date</th>
                            <th>Candidate</th>
                            <th>Stats Source</th>
                            <th>Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                    { rowlist }
                       
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Profile;