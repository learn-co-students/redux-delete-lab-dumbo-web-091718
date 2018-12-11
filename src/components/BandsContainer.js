import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {

    const renderBands = this.props.bands.map(band => {
      return <Band key={band.id} band={band} />
    })

    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {renderBands}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
