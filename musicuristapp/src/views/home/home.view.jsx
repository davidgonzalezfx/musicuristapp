import React, { useState } from 'react'

const HomeView = () => {
	const [response, setResponse] = useState('Success')

	const fetchData = async (query) => {
		const response = await fetch(`/search?q=${query}`)
		const data = await response.json()
		setResponse(data)
	}

	const Tracks = () =>
		!!response.tracks &&
		!!response.tracks.items && (
			<>
				{response.tracks.items.map((track) => (
					<p>
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
					<input type='text' id='q' name='q' onChange={(e) => fetchData(e.target.value)} />
				</form>
				<Tracks />
			</header>
		</div>
	)
}

export default HomeView
