export const PROFILE_REQUEST = "@profile/REQUEST";
export const PROFILE_UPDATE = "@profile/UPDATE";
export const PROFILE_SUCCESS = "@profile/SUCCESS";
export const PROFILE_ERROR = "@profile/ERROR";

export function profileRequest() {
  return {
    type: PROFILE_REQUEST,
    payload: {}
  };
}

export function profileUpdate(data) {
  return {
    type: PROFILE_UPDATE,
    payload: { ...data }
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
