import { GET_PHONES_OK , GET_PHONES_ERROR } from '../actions/phones';

// Phones reducer

const initialState = {
  list:[],
  selected: null,
  error: null
}

export function phones(state = initialState, action) {

  switch (action.type) {
    case GET_PHONES_OK:
      return { ...state , list:action.phones , error:null}
    case GET_PHONES_ERROR:
      return { ...state , list:[] , error:action.msg}
    default:
      return state
  }

}