import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "../../services/api";
import { profileError, profileSuccess, PROFILE_REQUEST } from "./actions";
import { User } from "./reducers";

function* profile(action) {
  try {
    const response = yield call(api.get, "/me");

    const data = response.data;

    yield put(profileSuccess(data));
  } catch (err) {
    yield put(profileError(err));
  }
}

export default all([takeLatest(PROFILE_REQUEST, profile)]);
