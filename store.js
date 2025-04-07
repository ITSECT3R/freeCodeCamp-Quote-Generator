// Create and configure the Redux store
const store = Redux.createStore(
  quoteReducer,
  // Optional: Add Redux DevTools Extension support if available
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
