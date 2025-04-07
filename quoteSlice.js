// Sample quotes data
const quotesData = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" }
];

// Action Types
const NEW_QUOTE = 'NEW_QUOTE';

// Keep track of the last quote index to avoid repeats
let lastQuoteIndex = -1;

// Action Creator
function getNewQuote() {
  // Get a different random quote from our data
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotesData.length);
  } while (randomIndex === lastQuoteIndex);
  
  // Update the last index
  lastQuoteIndex = randomIndex;
  
  return {
    type: NEW_QUOTE,
    payload: quotesData[randomIndex]
  };
}

// Initial State
const initialQuoteState = {
  currentQuote: quotesData[Math.floor(Math.random() * quotesData.length)]
};

// Reducer
function quoteReducer(state = initialQuoteState, action) {
  switch (action.type) {
    case NEW_QUOTE:
      return {
        ...state,
        currentQuote: action.payload
      };
    default:
      return state;
  }
}
