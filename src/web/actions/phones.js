// Action types

export const GET_PHONES = 'GET_PHONES';
export const GET_PHONES_OK = 'GET_PHONES_OK';
export const GET_PHONES_ERROR = 'GET_PHONES_ERROR';

// Action function generators

export function getPhones() {
  return {
    type: GET_PHONES
  }
}

export function getPhonesOk(phones) {
  return {
    type: GET_PHONES_OK,
    phones
  }
}

export function getPhonesError(msg) {
  return {
    type: GET_PHONES_ERROR,
    msg
  }
}