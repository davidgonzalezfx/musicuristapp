import React from 'react'
// import ContentLoader from 'react-content-loader'

import styles from './trackDetail.module.css'

const TrackDetail = ({ track }) => {
	return (
		<section className={styles.trackDetail}>
			{track ? (
				<>
					<img alt={track.title} src={track.image} />
					<div>
						<h5>{track.title}</h5>
						<h5>{track.artists[0]}</h5>
					</div>
				</>
			) : (
				<p>No track :(</p>
			)}
		</section>
	)
}

export default TrackDetail
