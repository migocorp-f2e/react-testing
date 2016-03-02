import expect from 'expect';
import createId from './createId';

describe('createId', () => {
  it('should convert a description into a unique id', () => {
    const actual = createId(123, 'Cool description example');
    const expected = '123-cool-description'
    expect(actual).toEqual(expected);
  });
});
