import { SEARCH_THEMES } from "../helpers/types";

const initialState = '';

export default function searchReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_THEMES:
      return {
        ...state,
        payload: action.search
      };
    default:
      return state;
  }
}