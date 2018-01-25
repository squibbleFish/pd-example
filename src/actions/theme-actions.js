import Request from 'axios';
import _ from 'lodash';

import { searchThemes } from "./search-actions";
import { GET_THEMES, THROW_ERROR } from "../helpers/types";
import { API, TOKEN, CACHE_KEY } from '../helpers/config';

export function getThemes() {
  return async (dispatch) => {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
    /**
     * @todo: This can really be cleaned up. Too much logic
     */
    if (_.isNil(cached)) {
      try {
        const { data } = await Request.get(API, {
          headers: { 'Authorization': `Bearer ${ TOKEN }` }
        });
        dispatch({
          type: GET_THEMES,
          payload: data.rows
        })
      } catch (e) {
        dispatch({
          type: THROW_ERROR,
          payload: {
            error: true,
            trace: e
          }
        })
      }
    } else {
      dispatch({
        type: GET_THEMES,
        payload: cached.themes.themes
      })
    }
  }
}

export {
  searchThemes
}