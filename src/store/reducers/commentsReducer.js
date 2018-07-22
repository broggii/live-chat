import * as types from '../actions/types';

const defaultState = {
  all: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.ADD_COMMENT:
      const all = [...state.all];
      all.push(payload);
      return { ...state, all };
    default:
      return state;
  }
};
