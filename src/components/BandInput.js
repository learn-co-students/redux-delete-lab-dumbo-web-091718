import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    bandName: ''
  }

  handleOnChange(event) {
    this.setState({
      bandName: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({
      bandName: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <label>Band Name:</label>
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
        </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
