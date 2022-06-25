import React, { Component } from 'react';  
import {  Row, Col , Nav, Navbar} from 'react-bootstrap';
import Profile from './Profile'
import ProfileList from './ProfilesList'
import Numeral from 'react-numeral';
import SelectionModal from './SelectionModal';
class Presidential extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
          defsett : {},
          rootapiurl : process.env.REACT_APP_UI.BASE_URL,
          datalist : [],
          datasources : [],
          currentidx  : 0,
          curcandidateid : 0,
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
        this.refreshStatsData = this.refreshStatsData.bind(this)
    }
    componentDidMount() { 

      this.fetchRemoteItems(); 
      setInterval(() => {
        let curidx = this.state.currentidx;
        if(this.state.datasources.length > 0 )
        {
          
            if(this.state.currentidx == this.state.datasources.length)
            {
              curidx = 0;
              this.refreshStatsData(this.state.datasources[curidx].id);
              this.setState({ currentidx : curidx + 1  });
            }
            else
            {
              this.refreshStatsData(this.state.datasources[curidx].id);
              this.setState({ currentidx : curidx + 1  });
            }

           
        }
        

      }, 30000);
    }
    initData(datalist)
     {

        if(datalist && datalist.length > 1)
        {
          
          this.setState(
            {
              curcandidateid : datalist[0].datacandidate.id,
              candidate1name : datalist[0].datacandidate.fullnames,
              candidate1votes : datalist[0].votes,
              candidate1code : datalist[0].datacandidate.short_code,
              candidate1percvotes : ((datalist[0].votes/this.state.defsett.totalvotes)*100).toLocaleString('en-US'),
              candidate2name : datalist[1].datacandidate.fullnames,
              candidate2votes : datalist[1].votes,
              candidate2code : datalist[1].datacandidate.short_code,
              candidate2percvotes : ((datalist[1].votes/this.state.defsett.totalvotes)*100).toLocaleString('en-US'),
              datasourcecode : datalist[1].statssource.code,
              datasourcewebst : datalist[1].statssource.website
              
            }

        )
          
        }
      
     }
     fetchRemoteItems() {
      // Get default settings
        fetch(this.state.rootapiurl+"/defaultsdata/")
               .then(res => res.json())
               .then(
                  (result) => {
                   this.setState({ defsett : result});
                  },
                  (error) => {
                     
                  }
               )
      //Get Data Sources
      fetch(this.state.rootapiurl+"/statssource/")
               .then(res => res.json())
               .then(
                  (result) => {
                   
                   this.setState({ datasources : result , currentidx : 1 });
                   this.refreshStatsData(result[0].id)
                  },
                  (error) => {
                     
                  }
      )
      // Get Stats Data 
      
   }
   refreshStatsData(srcid)
   {
          console.log("---------start-------------")
          console.log(srcid)
            fetch(this.state.rootapiurl+"/statsdatabysrc/?id="+srcid)
            .then(res => res.json())
            .then(
              (result) => {
                console.log(result)
                console.log("---------end-------------")
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
      let toRender = null;
      if(this.state.curcandidateid != 0)
      {
        toRender = <Profile curid={this.state.curcandidateid} />;
      }
      return (
          <div>
          <Navbar bg="dark" variant="dark" style={{ height : "40px" }} className="navbar navbar-inverse navbar-fixed-top">
                                
                                <Nav >
                                  <Nav.Link style={{ height : "40px", color :"#32CD32", fontWeight : 'bold' }}>Total Votes : <Numeral
        value={this.state.defsett == null ? 0 : this.state.defsett.totalvotes}
        format={"0,0"}
      />  </Nav.Link>
                                  <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                  <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>                                
                                    {this.state.candidate1name} : <Numeral value={this.state.candidate1votes} format={"0,0"} /></Nav.Link>
                                  <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>
                                    {this.state.candidate2name} : <Numeral value={this.state.candidate2votes} format={"0,0"} />  </Nav.Link>
                                  <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                  <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}>% age-</Nav.Link>
                                  <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}> {this.state.candidate1code} : <Numeral value={this.state.candidate1percvotes} format={"0,0"} />%,</Nav.Link>
                                  <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}> {this.state.candidate2code} : <Numeral value={this.state.candidate2percvotes} format={"0,0"} />%</Nav.Link>
                                  <Nav.Link style={{ height : "40px", color :"orange", fontWeight : 'bold' }}>|</Nav.Link>
                                  <Nav.Link style={{ height : "40px", color :"#007FFF", fontWeight : 'bold' }}> Source : <a href={this.state.datasourcewebst}> <span style={{ color :"orange", fontWeight : 'bold' }}>{this.state.datasourcecode} </span> </a> </Nav.Link>
                                </Nav>
                             
                    
                        </Navbar> 
            <Row  className="mt-2" >
             
                                <Col md="auto">

                                     {toRender}
                                </Col>
                                <Col>
                                  <ProfileList />
                                          
                                </Col>
                            </Row></div>
        )
    }
}
export default Presidential;
