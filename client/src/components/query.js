import React from 'react';
import axios from 'axios';
import { JsonToTable } from "react-json-to-table";

export default class UserQuery extends React.Component {
  state = {
    name: '',
    json: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`/api/sql-query-value`, { user })
      .then(res => {
        // console.log(res);
        console.log(res.data);
        this.setState({ json: JSON.parse(JSON.stringify(res.data))});
        // console.log(JSON.parse(JSON.stringify(res)))
      })
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
        <br></br>
        <JsonToTable json={this.state.json} />
      </div>
    )
  }
}


          
