import expect from 'expect';
import {ADD_QUOTE_BY_ID, REMOVE_QUOTE_BY_ID, LIKE_QUOTE_BY_ID, UNLIKE_QUOTE_BY_ID} from '../../../state/ActionTypes';
import {addQuoteById, removeQuoteById, likeQuoteById, unlikeQuoteById} from './quoteActionCreators';

describe('quoteActionCreators', () => {

  describe('addQuoteById', () => {

    it('should create correct actions', () => {
      const payload = {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 7
      };
      const actual = addQuoteById(payload);
      const expected = {
        type: ADD_QUOTE_BY_ID,
        payload
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('removeQuoteById', () => {

    it('should create correct actions', () => {
      const payload = {
        id: 1
      };
      const actual = removeQuoteById(payload);
      const expected = {
        type: REMOVE_QUOTE_BY_ID,
        payload
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('likeQuoteById', () => {

    it('should create correct actions', () => {
      const payload = {
        id: 1
      };
      const actual = likeQuoteById(payload);
      const expected = {
        type: LIKE_QUOTE_BY_ID,
        payload
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('unlikeQuoteById', () => {

    it('should create correct actions', () => {
      const payload = {
        id: 1
      };
      const actual = unlikeQuoteById(payload);
      const expected = {
        type: UNLIKE_QUOTE_BY_ID,
        payload
      };
      expect(actual).toEqual(expected);
    });
  });
});
