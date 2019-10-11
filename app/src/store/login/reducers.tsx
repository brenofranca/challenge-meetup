import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./actions";

const INITIAL_STATE = {
  data: {
    type: "",
    token: "",
    refreshToken: ""
  },
  error: null,
  loading: null
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.payload.token };
    case LOGIN_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
