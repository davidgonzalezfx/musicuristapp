import React from 'react'
// import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import TrackDetail from '../../components/TrackDetail'

const TrackDetailContainer = ({ id, tracks }) => {
const track = tracks.filter(track => track.id === id)[0]
	
	return <TrackDetail track={track} />
}

const mapsStateToProps = ({ tracks }) => {
	return {
		tracks: tracks.data
	}
}

export default connect(mapsStateToProps)(TrackDetailContainer)
