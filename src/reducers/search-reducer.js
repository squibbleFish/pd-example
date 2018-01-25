import { FILTER_THEMES, SEARCH_THEMES } from "../helpers/types";

const initialState = {
  search: {
    search: ''
  },
};

export default function searchReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_THEMES:
      return {
        ...state,
        search: action.payload
      };
    case FILTER_THEMES:
      const { payload } = action;
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
}
