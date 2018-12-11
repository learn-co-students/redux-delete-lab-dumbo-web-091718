import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {
    const renderBands = this.props.bands.map(band => <li key={band.id}>{band.bandName} <button onClick={()=>this.props.removeBand(band.id)}>Delete</button></li>)
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {renderBands}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band }),
  removeBand: id => dispatch({type: "DELETE_BAND", payload: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
