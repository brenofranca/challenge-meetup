import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "../../services/api";
import {
  profileError,
  profileSuccess,
  PROFILE_REQUEST,
  PROFILE_UPDATE
} from "./actions";
import { User } from "./reducers";

function* profileRequest(action) {
  try {
    const response = yield call(api.get, "/me");

    const data = response.data as User;

    yield put(profileSuccess(data));
  } catch (err) {
    yield put(profileError(err));
  }
}

function* profileUpdate(action) {
  try {
    const response = yield call(api.put, "/me", action.payload);

    const data = response.data as User;

    yield put(profileSuccess(data));
  } catch (err) {
    yield put(profileError(err));
  }
}

export default all([
  takeLatest(PROFILE_REQUEST, profileRequest),
  takeLatest(PROFILE_UPDATE, profileUpdate)
]);
