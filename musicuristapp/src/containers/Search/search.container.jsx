import React, { useState, useEffect } from 'react'
// import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import TracksActions from '../../redux/tracks'
import SearchBar from '../../components/SearchBar'

const SearchContainer = ({ getTracks }) => {

	const [query, setquery] = useState(null)

	useEffect(() => {
		if (query !== null && query !== '') getTracks({ query })
	}, [getTracks, query])

	return <SearchBar query={query} setQuery={setquery} />
}

const mapDispatchToProps = (dispatch) => {
	return {
		getTracks: (query) => dispatch(TracksActions.tracksRequest(query))
	}
}

export default connect(null, mapDispatchToProps)(SearchContainer)
