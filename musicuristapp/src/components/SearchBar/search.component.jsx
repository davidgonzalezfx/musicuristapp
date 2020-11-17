import React from 'react'
import styles from './search.module.css'

const SearchBar = ({ setQuery }) => {
	return (
		<section className={styles.search__header}>
			<label>All about your favorite tracks in one place:</label>
			<input type='text' onChange={(e) => setQuery(e.target.value)} />
		</section>
	)
}

export default SearchBar
