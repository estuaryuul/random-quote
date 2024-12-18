import "./App.css";
import React, { useState, useEffect } from "react";
import getRandomQuotes from "./utils/getRandomQuots";

function App() {
  const [quote, getQuote] = useState({});

  const handleGetQuote = () => {
    let newQuote = getRandomQuotes();
    while (newQuote === quote) {
      newQuote = getRandomQuotes();
    }
    getQuote(newQuote);
  };

  useEffect(() => {
    handleGetQuote();
  }, []);

  const getTwitterLink = () => {
    const twitterBaseUrl = "https://twitter.com/intent/tweet?text=";
    const tweetContent = encodeURIComponent(
      `"${quote.quote}" - ${quote.author}`
    );
    return `${twitterBaseUrl}${tweetContent}`;
  };

  return (
    <div className="App" id="quote-box">
      <div className="quote">
        <p id="text">{`"${quote.quote}` || "Loading Quote..."}</p>
        <p id="author">{quote.author || "Loading Author..."}</p>
      </div>
      <div className="quote-btn-container">
        <div className="quote-btn twitter">
          <a
            id="tweet-quote"
            href={getTwitterLink()}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <div className="quote-btn new-quote">
          <button id="new-quote" onClick={handleGetQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
