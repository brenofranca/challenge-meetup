import { all } from "redux-saga/effects";

import login from "./login/sagas";
import profile from "./profile/sagas";

export default function* rootSaga() {
  return yield all([login, profile]);
}
