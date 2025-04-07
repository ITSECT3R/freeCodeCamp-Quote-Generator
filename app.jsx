// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    quote: state.currentQuote
  };
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    getNewQuote: () => dispatch(getNewQuote())
  };
};

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewQuote = this.handleNewQuote.bind(this);
    }

    handleNewQuote() {
        this.props.getNewQuote();
    }

    render() {
        const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + this.props.quote.text + '" ' + this.props.quote.author)}`;
        
        return (
            <div id="quote-box">
                <div className="quote-content">
                    <p id="text">
                        <i className="fa fa-quote-left"></i> {this.props.quote.text}
                    </p>
                    <p id="author">- {this.props.quote.author}</p>
                </div>
                <div className="buttons">
                    <a
                        id="tweet-quote"
                        href={tweetURL}
                        target="_blank"
                        className="button"
                    >
                        <i className="fa fa-twitter"></i> Tweet
                    </a>
                    <button
                        id="new-quote"
                        onClick={this.handleNewQuote}
                        className="button"
                    >
                        New Quote
                    </button>
                </div>
            </div>
        );
    }
}

// Connect component to Redux
const ConnectedQuote = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote);

// Create App component
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <ConnectedQuote />
                <div className="footer">
                    <p>by Angel</p>
                </div>
            </div>
        );
    }
}

// Wrap App with Provider
const AppWrapper = () => {
    return (
        <ReactRedux.Provider store={store}>
            <App />
        </ReactRedux.Provider>
    );
};

// Render to DOM
ReactDOM.render(<AppWrapper />, document.getElementById('root'));