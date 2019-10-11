export const PROFILE_REQUEST = "@profile/REQUEST";
export const PROFILE_SUCCESS = "@profile/SUCCESS";
export const PROFILE_ERROR = "@profile/ERROR";

export function profileRequest() {
  return {
    type: PROFILE_REQUEST,
    payload: {}
  };
}

export function profileSuccess(data) {
  return {
    type: PROFILE_SUCCESS,
    payload: { ...data }
  };
}

export function profileError(data) {
  return {
    type: PROFILE_ERROR,
    payload: { ...data }
  };
}
