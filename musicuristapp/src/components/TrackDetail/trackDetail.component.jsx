import React from 'react'
import { Redirect } from 'react-router-dom'
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
				<Redirect to="/home" />
			)}
		</section>
	)
}

export default TrackDetail
