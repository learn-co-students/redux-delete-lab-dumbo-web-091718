import React, { Component } from 'react';
import { connect } from 'react-redux'

class Band extends Component {

  render() {
    return(
      <div>
        <span>{this.props.band.name}</span><button onClick={() => this.props.deleteBand(this.props.band.id)}>Delete</button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBand: id => dispatch({type: 'DELETE_BAND', id})
  }
}

export default connect(null, mapDispatchToProps)(Band);
