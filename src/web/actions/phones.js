// Action types

export const TEST_ACTION = 'TEST_ACTION';
export const TEST_ACTION_OK = 'TEST_ACTION_OK';
export const TEST_ACTION_ERROR = 'TEST_ACTION_ERROR';

// Action function generators

export function testAction() {
  return {
    type: TEST_ACTION
  }
}

export function testActionOk(msg) {
  return {
    type: TEST_ACTION_OK,
    msg
  }
}

export function testActionError(msg) {
  return {
    type: TEST_ACTION_ERROR,
    msg
  }
}