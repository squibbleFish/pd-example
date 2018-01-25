import { GET_THEMES } from "../helpers/types";

const initialState = {
  themes: []
};

export default function themeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_THEMES:
      return {
        ...state,
        themes: action.payload
      };
    default:
      return state;
  }
}
