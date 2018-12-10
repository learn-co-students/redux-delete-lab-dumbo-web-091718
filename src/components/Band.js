import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.band.name}<button onClick={() => this.props.delete(this.props.band.id)}>DELETE</button></li>
      </div>
    );
  }
};

export default Band;
