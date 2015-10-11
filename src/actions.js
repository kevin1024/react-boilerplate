export const SAY_HELLO = 'SAY_HELLO';

export function hello() {
  return dispatch => {
    dispatch(sayHello());
  }
}

export function sayHello() {
  return {type: SAY_HELLO};
}
