import { useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById('text').innerText = data.content;
        document.getElementById('author').innerText = `- ${data.author}`;
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text"></p>
        <p id="author"></p>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweet</a>
      </div>
    </div>
  );
}

export default App;
