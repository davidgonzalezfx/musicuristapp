import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
// import ContentLoader from 'react-content-loader'

import { ReactComponent as PrevArrow } from '../../assets/SVGs/prevArrow.svg'
import { ReactComponent as NextArrow } from '../../assets/SVGs/nextArrow.svg'

import styles from './tracksCarrousel.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TracksCarrousel = ({ tracks }) => {
	const settings = {
		autoplay: true,
		infinite: false,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	}

	return (
		<section className={styles.carrousel}>
			{tracks.length ? (
				<div className={styles.carrousel__slider}>
					<Slider {...settings}>
						{tracks.map((track) => (
							<>
								<div className={styles.carrousel__cards} key={track.id}>
									<Link to={`track/${track.id}`}>
										<img alt={track.title} src={track.image} />
									</Link>
								</div>
								<p>
									{track.title}, {track.artists[0]}
								</p>
							</>
						))}
					</Slider>
				</div>
			) : (
				<p>Start your search!</p>
			)}
		</section>
	)
}

export default TracksCarrousel
