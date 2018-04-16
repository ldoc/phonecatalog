import { TEST_ACTION_OK , TEST_ACTION_ERROR } from '../actions/phones';

// Phones reducer

const initialState = {test:''};

export function phones(state = initialState, action) {

  switch (action.type) {
    case TEST_ACTION_OK:
      return {...state,test:action.msg}
    case TEST_ACTION_ERROR:
      return {...state,test:action.msg}
    default:
      return state
  }

}