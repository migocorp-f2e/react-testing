import expect from 'expect';
import {addQuoteById, removeQuoteById, likeQuoteById, unlikeQuoteById} from './quoteActionCreators';
import quoteReducer from './quoteReducer';

describe('quoteReducer', () => {

  function stateBefore() {
    return [
      {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 7
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'John Smith',
        id: 2,
        likeCount: 0
      }
    ];
  }

  it('should add quotes by id', () => {
    const action = addQuoteById({
      text: 'This is a new quote',
      author: 'Someone awesome',
      id: 3,
      likeCount: 0
    });
    const actual = quoteReducer(stateBefore(), action);
    const expected = [
      {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 7
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'John Smith',
        id: 2,
        likeCount: 0
      },
      {
        text: 'This is a new quote',
        author: 'Someone awesome',
        id: 3,
        likeCount: 0
      }
    ];
    expect(actual).toEqual(expected);
  });

  it('should remove quotes by id', () => {
    const action = removeQuoteById({
      id: 1
    });
    const actual = quoteReducer(stateBefore(), action);
    const expected = [
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'John Smith',
        id: 2,
        likeCount: 0
      }
    ];
    expect(actual).toEqual(expected);
  });

  it('should return prevous state when trying to remove quote with a non-existant id', () => {
    const action = removeQuoteById({
      id: 521
    });
    const actual = quoteReducer(stateBefore(), action);
    const expected = stateBefore();
    expect(actual).toEqual(expected);
  });

  it('should increase quote like count by id', () => {
    const action = likeQuoteById({
      id: 2
    });
    const actual = quoteReducer(stateBefore(), action);
    const expected = [
      {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 7
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'John Smith',
        id: 2,
        likeCount: 1
      }
    ];
    expect(actual).toEqual(expected);
  });

  it('should decrease quote like count by id', () => {
    const action = unlikeQuoteById({
      id: 1
    });
    const actual = quoteReducer(stateBefore(), action);
    const expected = [
      {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 6
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'John Smith',
        id: 2,
        likeCount: 0
      }
    ];
    expect(actual).toEqual(expected);
  });

  it('should return previous state when trying to make a quote like count negative', () => {
    const action = unlikeQuoteById({
      id: 2
    });
    const actual = quoteReducer(stateBefore(), action);
    const expected = stateBefore();
    expect(actual).toEqual(expected);
  });

  it('should return prevous state when trying to change the like count on a quote with a non-existant id', () => {
    const action = unlikeQuoteById({
      id: 241
    });
    const actual = quoteReducer(stateBefore(), action);
    const expected = stateBefore();
    expect(actual).toEqual(expected);
  });
});
