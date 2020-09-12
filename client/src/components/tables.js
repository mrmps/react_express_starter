import React, { Component } from 'react';
import './tables.css';

class Tables extends Component {
  constructor() {
    super();
    this.state = {
      tables: []
    };
  }

  componentDidMount() {
    fetch('/api/tables')
      .then(res => res.json())
      .then(tables => this.setState({tables}, () => console.log('Tables fetched...', tables)));
  }

  render() {
    return (
      <div>
        <ul>
        {this.state.tables.map(table => 
          <li key={table.id}>{table.TABLE_NAME}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Tables;
