import { GET_THEMES, THROW_ERROR } from "../helpers/types";
import Request from 'axios';

import { API, TOKEN } from '../helpers/config';

export function getThemes() {
  return async (dispatch) => {
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
  }
}