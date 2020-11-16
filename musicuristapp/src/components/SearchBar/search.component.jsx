import React from 'react'
// import Slider from 'react-slick'
// import ContentLoader from 'react-content-loader'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const SearchBar = ({ setQuery }) => {
	const tracks = []
	const Tracks = () =>
		!!tracks && (
			<>
				{tracks.map((track) => (
					<p key={track.id}>
						{track.name} - {track.artists[0].name}
					</p>
				))}
			</>
		)

	return (
		<div className='App'>
			<header className='App-header'>
				<form onSubmit={(e) => e.preventDefault()}>
					<label>Start search:</label>
					<br />
					<input type='text' id='q' name='q' onChange={(e) => setQuery(e.target.value)} />
				</form>
				<Tracks />
			</header>
		</div>
	)
}

export default SearchBar
