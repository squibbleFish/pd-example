import { GET_THEMES, SEARCH_THEMES } from "../helpers/types";

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
    case SEARCH_THEMES:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
}
