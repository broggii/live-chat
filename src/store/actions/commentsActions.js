import * as types from './types';
import { firestore as db } from 'firebase/app';

export const addComment = comment => dispatch => {
  dispatch({
    type: types.ADD_COMMENT,
    payload: comment,
  });
};

export const getCommentsAsync = () => dispatch => {
  db()
    .collections('comments')
    .onSnapshot(snap => {
      dispatch({
        type: types.ADD_COMMENT,
        payload: snap.data(),
      });
    });
};
