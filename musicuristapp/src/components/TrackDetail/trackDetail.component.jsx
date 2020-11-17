import React from 'react'
import { Redirect } from 'react-router-dom'
// import ContentLoader from 'react-content-loader'

import styles from './trackDetail.module.css'

const TrackDetail = ({ track }) => {
	console.log('-> track:\n', track)
	return (
		<section className={styles.trackDetail}>
			{track ? (
				<>
					<img alt={track.title} src={track.image} />
					<div>
						<h2>{track.title}</h2>
						{track.artists.map((artist, idx) => {
							if (idx !== track.artists.length - 1) return <span>{artist}, </span>
							return <span>{artist}</span>
						})}
						<br />
						<a href={track.preview} target='_blank' rel='noreferrer'>
							Preview Track
						</a>
						<p>Or </p>
						<a href={track.spotify} target='_blank' rel='noreferrer'>
							Listen on spotify
						</a>
					</div>
				</>
			) : (
				<Redirect to='/home' />
			)}
		</section>
	)
}

export default TrackDetail
