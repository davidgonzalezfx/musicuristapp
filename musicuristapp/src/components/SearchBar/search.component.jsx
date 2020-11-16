import React from 'react'

const SearchBar = ({ setQuery }) => {
	
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<label>Start search:</label>
			<br />
			<input type='text' id='q' name='q' onChange={(e) => setQuery(e.target.value)} />
		</form>
	)
}

export default SearchBar
