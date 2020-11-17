import React from 'react'
import TrackDetailContainer from '../../containers/TrackDetail/trackDetail.container'

const TrackView = (props) => {
  const { match: {params} } = props
  const trackId = params.id

	return (
		<>
			<TrackDetailContainer id={trackId} />
		</>
	)
}
export default TrackView
