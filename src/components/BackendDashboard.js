import React, { Component } from 'react';  
import BackendNav from './BackendNav';
class BackendDashboard extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
        }
      }

    render()
    {   
        
        return (
              <div>
                  <BackendNav />
                  
              </div>  
        )
    }
}
export default BackendDashboard;