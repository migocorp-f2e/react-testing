import React from 'react';
import {container} from '../../../utilities/styleGuide';
import Quote from './Quote';

const QuoteList = ({
  quotes,
  theme,
  likeQuoteById,
  unlikeQuoteById,
  removeQuoteById
}) => {
  return (
    <div style={container}>
      {quotes.map(quote => {
        return (
          <Quote
            theme={theme}
            key={quote.id}
            quote={quote}
            likeQuoteById={likeQuoteById}
            unlikeQuoteById={unlikeQuoteById}
            removeQuoteById={removeQuoteById}
          />
        );
      })}
    </div>
  );
};

QuoteList.propTypes = {
  quotes: React.PropTypes.array.isRequired,
  removeQuoteById: React.PropTypes.func.isRequired,
  likeQuoteById: React.PropTypes.func.isRequired,
  unlikeQuoteById: React.PropTypes.func.isRequired,
  theme: React.PropTypes.object.isRequired
};

export default QuoteList;
