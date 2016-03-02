import React from 'react';
import {COLOR_FILL, COLOR_WARNING, container, cushion, emphasis, subtle, alignRight, spaceBetween, rounded} from '../../../utilities/styleGuide';
import Icon from '../../../components/Icon';
import LikeCounter from './LikeCounter';

class Quote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  handleLikes() {
    this.setState({
      liked: !this.state.liked
    }, () => {
      const payload = {
        id: this.props.quote.id
      };
      this.state.liked
        ? this.props.likeQuoteById(payload)
        : this.props.unlikeQuoteById(payload);
    });
  }

  handleRemove() {
    const payload = {
      id: this.props.quote.id
    };
    this.props.removeQuoteById(payload);
  }

  render() {
    return (
      <div
        style={{
          ...container,
          ...cushion,
          ...rounded,
          background: COLOR_FILL
        }}
        key={this.props.quote.id}
      >
        <div style={emphasis}>
          "{this.props.quote.text}"
        </div>
        <div style={{...subtle, ...alignRight}}>
          <div style={cushion}>
            {this.props.quote.author}
          </div>
          <div style={{...spaceBetween, ...subtle}}>
            <a
              style={{color: COLOR_WARNING}}
              onClick={this.handleRemove.bind(this)}
            >
              <Icon name='trash' />
            </a>
            <LikeCounter
              count={this.props.quote.likeCount}
              isActive={this.state.liked}
              activeColor={this.props.theme.color}
              handleLikes={this.handleLikes.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

Quote.propTypes = {
  quote: React.PropTypes.object.isRequired,
  removeQuoteById: React.PropTypes.func.isRequired,
  likeQuoteById: React.PropTypes.func.isRequired,
  unlikeQuoteById: React.PropTypes.func.isRequired,
  theme: React.PropTypes.object.isRequired
};

export default Quote;
