import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🍔": "Burger",
  "🥞": "Pan Cake",
  "🧇": "Waffle",
  "🍟": "French Fries"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Unknown Emoji";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <header>Food Emoji!</header>

      <input
        placeholder="Enter your emoji here..."
        onChange={emojiInputHandler}
      ></input>

      <div>meaning: {meaning}</div>

      <h3>emojis we know</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <footer className="footer">
        <div class="footer-header">let's connect!</div>
        <ul class="social-links list-non-bullet">
          <li class="list-item-inline">
            <a class="link" href="https://github.com/smkmallik">
              github
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://twitter.com/soumik_72">
              twitter
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://www.linkedin.com/in/smkmallik/">
              linkedin
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
