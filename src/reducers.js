import {
  SAY_HELLO,
} from './actions';

const initialState = {
  helloSaid: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
  case SAY_HELLO:
    return {helloSaid: true};
  default:
    return state;
  }
}

export default reducer;
