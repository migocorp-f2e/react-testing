import React from 'react';
import {cushion, button, input} from '../../../utilities/styleGuide';
import createId from '../../../utilities/createId';

class AddQuote extends React.Component {

  handleSubmit() {
    const textNode = this.refs.text;
    const text = textNode.value.trim();
    const authorNode = this.refs.author;
    const author = authorNode.value.trim();
    const payload = {
      text,
      author,
      id: createId(Date.now(), text),
      likeCount: 0
    };
    this.props.addQuoteById(payload);
    textNode.value = '';
    authorNode.value = '';
  }

  render() {
    return (
      <div>
        <textarea
          style={{...cushion, ...input}}
          ref='text'
          placeholder='Quote'
        >
        </textarea>
        <input
          style={{...cushion, ...input}}
          ref='author'
          placeholder='Author'
        >
        </input>
        <a
          style={button}
          onClick={this.handleSubmit.bind(this)}>
          Add Quote
        </a>
      </div>
    );
  }
}

AddQuote.propTypes = {
  addQuoteById: React.PropTypes.func.isRequired
};

export default AddQuote;
