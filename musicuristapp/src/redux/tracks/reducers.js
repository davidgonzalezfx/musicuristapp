import { createReducer } from '@reduxjs/toolkit'
import TracksTypes from './actionTypes';

/* ------------- Initial State ------------- */
export const TRACKS_INITIAL_STATE = {
	data: [],
	loadingTracks: true,
	tracksError: ""
}

/* ------------- Reducers ------------- */
export const tracksRequest = (state) => {
	return { ...state, loadingTracks: true }
}

export const tracksSuccess = (state, { payload }) => {
	return {
		...state,
		loadingTracks: false,
		tracksError: null,
		data: payload.data
	}
}

export const tracksFailure = (state, { payload }) => {
	return {
		...state,
		tracksError: payload,
		loadingTracks: false,
		data: []
	}
}

/* ------------- Hookup Reducers To Types ------------- */
export const tracksReducer = createReducer(TRACKS_INITIAL_STATE, {
	[TracksTypes.tracksRequest]: tracksRequest,
	[TracksTypes.tracksSuccess]: tracksSuccess,
	[TracksTypes.tracksFailure]: tracksFailure
})