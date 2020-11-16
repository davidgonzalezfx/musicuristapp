import { createAction } from "@reduxjs/toolkit";

const tracksRequest = createAction('tracks/request');
const tracksSuccess = createAction('tracks/success');
const tracksFailure = createAction('tracks/failure');

const TracksTypes = {
  tracksRequest,
  tracksSuccess,
  tracksFailure
}

export default TracksTypes
