import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from "./Bands"
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    let allBands = this.props.bands.map(band => {
      return <Bands
              key={band.id}
              band={band}
              deleteBand={this.props.deleteBand}
              />
    })
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {allBands}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: band => dispatch({type: "DELETE_BAND", band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
