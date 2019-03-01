import { GET_MESSAGESS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGESS:
      return action.payload;
    default:
      return state;
  }
}
