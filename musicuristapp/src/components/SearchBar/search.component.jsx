import React from 'react'
import styles from './search.module.css'

const SearchBar = ({ setQuery }) => {
	const handleSubmit = (e) => {
		setQuery(document.getElementById('query').value)
		e.preventDefault()
	}

	return (
		<section>
			<form onSubmit={handleSubmit} className={styles.search__header}>
				<label>All about your favorite tracks in one place:</label>
				<div>
					<input type='text' id='query' />
					<button type='submit'>Search</button>
				</div>
			</form>
		</section>
	)
}

export default SearchBar
