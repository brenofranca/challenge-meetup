export const LOGIN_REQUEST = "@login/REQUEST";
export const LOGIN_SUCCESS = "@login/SUCCESS";
export const LOGIN_ERROR = "@login/ERROR";

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    payload: { ...data }
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: { ...data }
  };
}

export function loginError(data) {
  return {
    type: LOGIN_ERROR,
    payload: { ...data }
  };
}
