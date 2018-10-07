import uuid from "uuid";

export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    //11. write reducers for remove, upvote/downvote Quote
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      let upvoteQuote = state.find(quote => quote.id === action.quoteId);
      let index = state.indexOf(upvoteQuote);

      console.log("upvote_quote", upvoteQuote.votes);

      let newState = [...state];
      newState[index].votes = upvoteQuote.votes + 1;
      return newState;

    case "DOWNVOTE_QUOTE":
      let downvoteQuote = state.find(quote => quote.id === action.quoteId);
      index = state.indexOf(downvoteQuote);

      newState = [...state];
      newState[index].votes =
        downvoteQuote.votes > 0 ? downvoteQuote.votes - 1 : 0;
      return newState;

    default:
      return state;
  }
};
