import React, { Component } from 'react';

class Band extends Component {

  render() {
    const band = this.props.band
    return(
        <li>
          {band.name} 
          <button onClick={() => this.props.deleteBand(band)}>Delete Band</button>
        </li>
    );
  }
};

export default Band;
