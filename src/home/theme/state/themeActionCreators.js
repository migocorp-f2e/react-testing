import {UPDATE_THEME_COLOR} from '../../../state/ActionTypes';

export function updateThemeColor(payload) {
  return {
    type: UPDATE_THEME_COLOR,
    payload: payload
  };
}
