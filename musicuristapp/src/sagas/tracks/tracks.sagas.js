import { put, call } from 'redux-saga/effects';
import TransformTracks from '../../transforms/ApiToTracks.transform'
import TracksActions  from '../../redux/tracks';

export function* getTracks(api, action) {
  const { query } = action.payload
  try {
    const response = yield call(api.getTracks, query)
    if(response.status < 300) {
      // const responseToMap = TransformBrands(request.data.data)
      // const pagination = TransformTracks(request.data)
      const responseMapped = TransformTracks(response.data.tracks.items)
      yield put(TracksActions.tracksSuccess({ data: responseMapped   }))
    }
  } catch (error) {
    // TODO track error sentry
    yield put(TracksActions.tracksFailure(error));
  }
}
