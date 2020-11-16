import React from 'react'
// import Slider from 'react-slick'
// import ContentLoader from 'react-content-loader'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const TracksCarrousel = ({ tracks }) => {
	return (
		<section>
			{tracks.length ? (
				<div>
					{tracks.map((track) => (
						<p key={track.id}>
							{track.title} - {track.artists[0]}
						</p>
					))}
				</div>
			) : (
				<p>Start your search!</p>
			)}
		</section>
	)
}

export default TracksCarrousel
