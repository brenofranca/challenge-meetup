import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_ERROR } from "./actions";

export interface Meetup {
  id: number;
  title: string;
  date: string;
  address: string;
  organizer: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  meetups: Meetup[];
}

export interface Action {
  type: string;
  payload: object;
}

const INITIAL_STATE = {
  data: {} as User,
  error: null,
  loading: null
};

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PROFILE_REQUEST:
      return { ...state, loading: true };
    case PROFILE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case PROFILE_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
