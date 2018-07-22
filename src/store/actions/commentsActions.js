import * as types from './types';

export const addComment = comment => dispatch => {
  dispatch({
    type: types.ADD_COMMENT,
    payload: comment,
  });
};
