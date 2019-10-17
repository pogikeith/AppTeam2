
import React, { Component } from "react";

export default class Profile extends Component { 
    constructor() {
        super()
    
        this.state = {
            data: []
        }
    }
componentDidMount () {
    fetch ("https://reporter-fake-dating-site-db.herokuapp.com/headlines/")
        .then(response => response.json())
        .then(results => this.setState ({data: results })
        )
        <Route to='/profile/:id' component={Profile} />
        
}

renderContent = () => {
    return 
}

    render () {
  return (
    <div className="Heading">
        <p>heading</p>
      </div>
  )}
 
}



