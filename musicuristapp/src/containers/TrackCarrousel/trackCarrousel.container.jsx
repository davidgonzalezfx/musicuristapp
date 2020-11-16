import React from 'react'
// import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import TracksCarrousel from '../../components/TracksCarrousel'

const TrackCarrouselContainer = ({ tracks }) => {
	return <TracksCarrousel tracks={tracks} />
}

const mapsStateToProps = ({ tracks }) => {
	return {
		tracks: tracks.data
	}
}

export default connect(mapsStateToProps)(TrackCarrouselContainer)
