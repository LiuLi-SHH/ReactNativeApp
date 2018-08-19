import {Component} from 'react';
import * as types from './HomeType'

const initialState = {
  addResult: 5,
}

export default function homeReducer(state = initialState, action) {

  switch (action.type) {
    case types.HOME_ADD:
      return {
        ...state,
        addResult: state.addResult + 2,
      }
      break;

    case types.HOME_REDUCE:
      return {
        ...state,
        addResult: state.addResult - 2,
      }
      break;

    default:
      return state;
  }
}
