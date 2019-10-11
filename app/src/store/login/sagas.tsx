import { all, call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST, loginError, loginSuccess } from "./actions";
import api from "../../services/api";
import NavigationService from "../../services/navigation";
import { AsyncStorage } from "react-native";

interface LoginToken {
  token: {
    refreshToken: null | string;
    token: null | string;
    type: null | string;
  };
}

function* sendLogin({ payload }) {
  try {
    const response = yield call(api.post, "/session", payload);

    const data = response.data as LoginToken;

    yield call(
      AsyncStorage.setItem,
      "@Meetup:token",
      JSON.stringify(data.token)
    );

    yield put(loginSuccess(data));

    NavigationService.navigate("Dashboard");
  } catch (err) {
    alert("Credenciais inválidas");
    yield put(loginError(err));
  }
}

export default all([takeLatest(LOGIN_REQUEST, sendLogin)]);
