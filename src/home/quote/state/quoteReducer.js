import {ADD_QUOTE_BY_ID, REMOVE_QUOTE_BY_ID, LIKE_QUOTE_BY_ID, UNLIKE_QUOTE_BY_ID} from '../../../state/ActionTypes';

export default function quoteReducer(state = [], action) {

  function changeLikeCountById(change) {
    const newQuotes = state
      .map(quote => {
        if(quote.id === action.payload.id) {
          switch (change) {
            case 'increment':
              quote.likeCount++;
              return quote;
            case 'decrement':
              if(quote.likeCount > 0) {
                quote.likeCount--;
              }
              return quote;
            default:
              return quote;
          }
        }
        return quote;
      });
    return newQuotes;
  }

  switch(action.type) {

    case ADD_QUOTE_BY_ID:
      return state
        .concat(action.payload);

    case REMOVE_QUOTE_BY_ID:
      return state
        .filter(quote => quote.id !== action.payload.id);

    case LIKE_QUOTE_BY_ID:
      return changeLikeCountById('increment');

    case UNLIKE_QUOTE_BY_ID:
      return changeLikeCountById('decrement');

    default:
      return state;
  }
}
