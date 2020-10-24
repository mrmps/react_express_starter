import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../Actions'
import './tables.css';

class Tables extends Component {

  componentDidMount() {
    console.log(this.props.state.ideas)
    this.props.loadIdeas()
    console.log('ideas',this.props.ideas)
    // fetch('/api/tables')
    //   .then(res => res.json())
    //   .then(fetched_ideas => {updateIdeas.bind(null, {fetched_ideas})});
      // .then(tables => this.setState({tables}, () => console.log('Tables fetched...', tables)));
  }
  increment(id) {
    this.props.incrementLikes(id)
    this.props.loadIdeas() 
  }
  decrement(id) {
    this.props.decrementLikes(id)
    this.props.loadIdeas() 
  }

  render() {
    return (
      <div>
        <p>tables</p>
        {/* <button onClick = {this.props.loadIdeas}></button> */}
        <ul>
          {this.props.ideas ? this.props.ideas.map(ideas => 
            // <li key={table.id}>{table.CONTENT} {table.likes} {table.flags}</li>
            <div className="container" style={{maxWidth: 800, width: 'auto', height: 'auto'}}>
              <div>
              <p key={ideas.id}>{ideas.CONTENT}</p>
              </div>
              <div>
                  <div onClick={() => {this.increment(ideas.id)}}>
                    <svg width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.6274 0.000630899C8.85995 -0.086326 0.0425466 8.82676 0.000155186 19.8703C-0.0422362 30.9138 8.6056 39.9573 19.373 40.0008C30.1404 40.0878 38.9578 31.1747 39.0002 20.1312C39.0426 9.08763 30.3948 0.0441094 19.6274 0.000630899ZM30.6915 20.2616C29.8013 22.4355 21.4926 30.0008 19.4154 32.3921C17.3806 30.0008 9.15669 22.3051 8.30886 20.1312C8.05451 19.4355 7.88495 18.6529 7.88495 17.8703C7.88495 14.5659 10.5132 11.9137 13.735 11.9572C16.3632 11.9572 18.2284 14.0877 19.5426 15.9572C20.8567 14.1311 22.7643 12.0007 25.3926 12.0007C28.6143 12.0007 31.2002 14.6964 31.1578 18.0007C31.1154 18.8268 30.9882 19.5659 30.6915 20.2616Z" fill="black"/>
                    </svg>
                  </div>
                  <p key={ideas.id}>{ideas.likes}</p>
                  <div onClick={() => {this.decrement(ideas.id)}}>
                    <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.5036 0C24.5979 0 21.4246 1.94286 19.4717 5.1C17.2748 1.45714 12.6368 -0.728571 7.75476 0.485714C4.09321 1.21429 1.16396 4.37143 0.431654 7.77143C-0.788863 12.1429 0.675758 16.0286 3.605 18.4571L18.2512 33.0286C18.4953 33.2714 18.7394 34 19.4717 34C20.204 34 20.4481 33.5143 20.9363 33.0286L35.3384 18.4571C37.5354 16.5143 39 13.6 39 10.4429C39 4.85714 34.362 0 28.5036 0ZM26.5507 19.1857C27.5271 20.1571 27.5271 21.6143 26.5507 22.5857C25.5743 23.5571 24.1097 23.5571 23.1333 22.5857L19.4717 18.7L15.8102 22.3429C14.8338 23.3143 13.3691 23.3143 12.3927 22.3429C11.4163 21.3714 11.4163 19.9143 12.3927 18.9429L16.0543 15.3L12.3927 11.6571C11.4163 10.6857 11.4163 9.22857 12.3927 8.25714C13.3691 7.28571 14.8338 7.28571 15.8102 8.25714L19.4717 11.9L23.1333 8.25714C24.1097 7.28571 25.5743 7.28571 26.5507 8.25714C27.5271 9.22857 27.5271 10.6857 26.5507 11.6571L22.8892 15.3L26.5507 19.1857Z" fill="black"/>
                    </svg>
                  </div>
              </div>
            </div>
          ) : null}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    state,
    ideas: state.ideas
  }
}

// const mapDispatchToProps = () => {
//   return {
//     updateIdeas
//   }
// }

export default connect(mapStateToProps, actionCreators)(Tables);
