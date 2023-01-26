import React, { Component } from 'react'

const darkMode = {
    backgroundColor: "black",
    color: "white"
}
const lightMode = {
    backgroundColor: "white",
    color: "black"
}
const buttonstyle = {
    width: "100px",
    height: "30px",
    backgroundColor: "gray",
    color: "black",
    fontSize: "1.2em",
    borderRadius: "10px"
}

class First extends Component {
    constructor(props){
        super(props);
        this.state = {
            light: true
        }
    }
  render() {
      const {firstName, lastName, number, children} = this.props
      return (
      <div style={this.state.light ? lightMode : darkMode}>
        <h2>
        First Name: {firstName}
        </h2>
        <h2>
        Last Name: {lastName}
        </h2>
        <h2>
        Age: {number}
        </h2>
        <p>{children}
        </p>
        <button style={buttonstyle} onClick={() => this.setState({light: !this.state.light})}>{this.state.light ? "On" : "Off"}</button>
      </div>
    )
  }
}

export default First;