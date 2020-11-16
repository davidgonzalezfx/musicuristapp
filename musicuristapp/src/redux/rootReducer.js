import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
	tracks: require('./tracks/reducers').tracksReducer,
})

export default rootReducer