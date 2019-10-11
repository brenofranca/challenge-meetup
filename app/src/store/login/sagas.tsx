import { all, takeLatest } from "redux-saga/effects";
import api from "../../services/api";
import NavigationService from "../../services/navigation";

function* sendLogin(credentials) {}

export default all([takeLatest("@login/ADD_REQUEST", sendLogin)]);
