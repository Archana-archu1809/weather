import * as type from "../types";
const initialState = {
  data: [],
  loading: false,
  error: null,
};
export default function data(state = initialState, action) {
  switch (action.type) {
    case type.GET_WEATHER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case type.GET_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
