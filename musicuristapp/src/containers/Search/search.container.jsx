import React, { useState, useEffect } from 'react'
// import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import TracksActions from '../../redux/tracks'
import SearchBar from '../../components/SearchBar'

const SearchContainer = ({ getTracks }) => {

	const [query, setquery] = useState('Initial')

	useEffect(() => {
		getTracks()
	}, [getTracks])
	console.log('\n\n\n-> Query: ', query, '\n\n\n')
	return <SearchBar query={query} setQuery={setquery} />
}

const mapDispatchToProps = (dispatch) => {
	return {
		getTracks: () => dispatch(TracksActions.tracksRequest({query: 'su presencia'}))
	}
}

export default connect(null, mapDispatchToProps)(SearchContainer)
