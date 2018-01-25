import { FILTER_THEMES, SEARCH_THEMES } from "../helpers/types";

export function searchThemes(value) {
  return {
    type: SEARCH_THEMES,
    payload: value
  }
}

export function filterThemes(data) {
  return (dispatch, getState) => {
    console.log('data', data);
    console.log('state', getState());
    dispatch({
      type: FILTER_THEMES,
      payload: data
    })
  }
}