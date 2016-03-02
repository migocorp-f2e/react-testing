import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai, {expect} from 'chai';
import jsxChai from 'jsx-chai'
import LikeCounter from './LikeCounter';

chai.use(jsxChai)

describe('LikeCounter', () => {

  it('should be a link', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} />);
    const actual = renderer.getRenderOutput().type
    const expected = 'a';
    expect(actual).to.equal(expected);
  });

  it('should render like counts', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} />);
    const actual = renderer.getRenderOutput();
    const expected = '5 likes';
    expect(actual).to.include(expected);
  });

  describe('isActive', () => {

    function renderLikeCounter(isActive) {
        const renderer = TestUtils.createRenderer();
        renderer.render(<LikeCounter count={5} isActive={isActive}/>);
        return renderer.getRenderOutput().props.className.includes('LikeCounter--active');
    }

    it('should show the like count as active', () => {
      expect(renderLikeCounter(true)).to.equal(true);
    });

    it('should show the like count as inactive', () => {
      expect(renderLikeCounter(false)).to.equal(false);
    });
  });
});
