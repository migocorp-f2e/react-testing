import {ADD_QUOTE_BY_ID, REMOVE_QUOTE_BY_ID, LIKE_QUOTE_BY_ID, UNLIKE_QUOTE_BY_ID} from '../../../state/ActionTypes';

export function addQuoteById(payload) {
  return {
    type: ADD_QUOTE_BY_ID,
    payload: payload
  };
}

export function removeQuoteById(payload) {
  return {
    type: REMOVE_QUOTE_BY_ID,
    payload: payload
  };
}

export function likeQuoteById(payload) {
  return {
    type: LIKE_QUOTE_BY_ID,
    payload: payload
  };
}

export function unlikeQuoteById(payload) {
  return {
    type: UNLIKE_QUOTE_BY_ID,
    payload: payload
  };
}
