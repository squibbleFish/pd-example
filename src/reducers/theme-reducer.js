import {FILTER_THEMES, GET_THEMES} from "../helpers/types";

const initialState = {
  themes: {},
  filtered: {}
};

export default function themeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_THEMES:
      return {
        ...state,
        themes: action.payload
      };
    case FILTER_THEMES:
      const {payload} = action;
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
}
