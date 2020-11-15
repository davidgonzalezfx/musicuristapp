  
import { takeLatest, all } from 'redux-saga/effects'
import CreateApi from '../services/api'

/* ------------- Types ------------- */
import { SearchTracksTypes } from '../redux/Tracks'

/* ------------- Sagas ------------- */
import { getTracks } from './tracks'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = CreateApi();

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    takeLatest(SearchTracksTypes.tracksRequest, getTracks, api),
  ])
}