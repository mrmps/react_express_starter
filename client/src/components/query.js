import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from '../Actions'

class UserQuery extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    console.log('clicked')
    event.preventDefault();

    const user = {
      name: this.state.name
    };
    console.log('name is', user)

    this.props.postIdea(user)
    this.props.loadIdeas() 
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea name="message" rows="10" cols="30" onChange={this.handleChange}>SELECT * FROM</textarea> 
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    state,
    name: state.name
  }
}

export default connect(mapStateToProps, actionCreators)(UserQuery);


          
