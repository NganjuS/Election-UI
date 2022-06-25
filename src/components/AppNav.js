import React, { Component } from 'react';  
import {  Row, Col, Nav, Navbar } from 'react-bootstrap';
class AppNav extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
          rootapiurl : process.env.REACT_APP_UI.BASE_URL,
            datalist : [],
            totalsvotes : 0,
            candidate1name : '',
            candidate1votes : 0,
            candidate2name : '',
            candidate2votes : 0,
            candidate1code : '',
            candidate2code : '',
            candidate1percvotes : 0,
            candidate2percvotes : 0,
            datasource : '',
            datasourcewebst : ''


        }
        this.initData = this.initData.bind(this)
      }
      componentDidMount() { 
        this.fetchRemoteItems(); 
     }
     initData(datalist)
     {

        if(datalist && datalist.length > 1)
        {
          
          this.setState(
            {
              candidate1name : datalist[0].datacandidate.fullnames,
              candidate1votes : datalist[0].votes,
              candidate1code : datalist[0].datacandidate.short_code,
              candidate1percvotes : ((datalist[0].votes/this.props.defsett.totalvotes)*100).toLocaleString('en-US'),
              candidate2name : datalist[1].datacandidate.fullnames,
              candidate2votes : datalist[1].votes,
              candidate2code : datalist[1].datacandidate.short_code,
              candidate2percvotes : ((datalist[1].votes/this.props.defsett.totalvotes)*100).toLocaleString('en-US'),
              datasourcecode : datalist[1].statssource.code,
              datasourcewebst : datalist[1].statssource.website
              
            }

        )
          
        }
      
     }
     fetchRemoteItems() {
        fetch(this.state.rootapiurl+"/statsdata/")
           .then(res => res.json())
           .then(
              (result) => {

                this.setState({ 
                  datalist : 
                  result});
                this.initData(result);
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
        
        return (
            <Navbar bg="dark" variant="dark" style={{ height : "40px" }} className="navbar navbar-inverse navbar-fixed-top">
                                
                                    <Nav >
                                      <Nav.Link style={{ height : "40px", color :"#32CD32", fontWeight : 'bold' }}>Total Votes : {this.props.defsett == null ? 0 : this.props.defsett.totalvotes.toLocaleString('en-US') }</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>{this.state.candidate1name} : {this.state.candidate1votes}</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>{this.state.candidate2name} : {this.state.candidate2votes} </Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>% age-</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}> {this.state.candidate1code} : {this.state.candidate1percvotes}%,</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}> {this.state.candidate2code} : {this.state.candidate2percvotes}%</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                      <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}> Source : <a href={this.state.datasourcewebst}>  {this.state.datasourcecode} </a> </Nav.Link>
                                    </Nav>
                                 
                        
                            </Navbar> 
        )
    }
}
export default AppNav;