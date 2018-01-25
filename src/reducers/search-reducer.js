import { SEARCH_THEMES } from "../helpers/types";

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
    default:
      return state;
  }
}
