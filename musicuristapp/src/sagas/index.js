  
import { takeLatest, all } from 'redux-saga/effects'
import CreateApi from '../services/api'

/* ------------- Types ------------- */
import { TracksTypes } from '../redux/tracks'

/* ------------- Sagas ------------- */
import { getTracks } from './tracks'

/* ------------- API ------------- */
const api = CreateApi();

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    takeLatest(TracksTypes.tracksRequest, getTracks, api),
  ])
}
