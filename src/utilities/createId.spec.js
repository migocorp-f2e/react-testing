import {expect} from 'chai';
import createId from './createId';

describe('createId', () => {
  it('should convert a description into a unique id', () => {
    const actual = createId(123, 'Cool description example');
    const expected = '123-cool-description'
    expect(actual).to.equal(expected);
  });
});
