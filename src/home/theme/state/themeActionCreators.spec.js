import expect from 'expect';
import {UPDATE_THEME_COLOR} from '../../../state/ActionTypes';
import {updateThemeColor} from './themeActionCreators';

describe('themeActionCreators', () => {

  describe('updateThemeColor', () => {

    it('should create correct actions', () => {
      const payload = {
        color: '#333333'
      };
      const actual = updateThemeColor(payload);
      const expected = {
        type: UPDATE_THEME_COLOR,
        payload
      };
      expect(actual).toEqual(expected);
    });
  });
});
