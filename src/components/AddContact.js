import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if(this.state.name === '' || this.state.email === '') {
      alert ("All fields are mandatory !!")
    }else{
      this.props.addContactHandler(this.state)    // to get the props from the parent
      this.setState( { name:'', email:'' })
  }                       
  };

  addName = (e) => {
    this.setState({ name : e.target.value})
  };



  render() {
    return (
      <div className="ui main">
        <h2>Add contact</h2>
        <form className="ui form" onSubmit={ this.add } >
          <div className="field">
            <label>Name</label>
            <input 
            type="text" 
            placeholder="Name" 
            name="name"
            onChange={ this.addName }                                 // Outer function implimentation
            value={this.state.name} />
          </div>
          <div className="field">
            <label>Email</label>
            <input 
            type="email" 
            placeholder="E-Mail" 
            name="email" 
            onChange={(e)=>this.setState({ email:e.target.value })}     // Inline function implimentation
            value={this.state.email} />
          </div>
          <button className="ui button green">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
