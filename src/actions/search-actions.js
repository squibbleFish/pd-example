import { SEARCH_THEMES } from "../helpers/types";

export function searchThemes(value) {
  return {
    type: SEARCH_THEMES,
    payload: value
  }
}
