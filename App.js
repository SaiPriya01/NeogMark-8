import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Corn",
  "🌶️": "Hot Pepper",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion"
};
// console.log(Object.keys(emojiDictionary));
var emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    // console.log(userInput);
    var inputMeaning = emojiDictionary[userInput];
    if (inputMeaning === undefined) {
      inputMeaning = "Emoji not found";
    }
    setMeaning(inputMeaning);
  }
  function emojiClickHandker(emoji) {
    var inputMeaning = emojiDictionary[emoji];
    setMeaning(inputMeaning);
  }
  return (
    <div className="App">
      <h1 className="header">Emoji Interpreter</h1>
      <div className="section">
        <input
          placeholder="Enter the Emoji or Choose from below"
          onChange={emojiInputHandler}
        />
        <div className="meaning">{meaning}</div>
        {emojis.map(function (emoji) {
          return (
            <span
              className="list"
              onClick={() => emojiClickHandker(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <h3 className="footer">
        {" "}
        made by <a href="https://saipriya01.netlify.app">SaiPriya</a>{" "}
      </h3>
    </div>
  );
}
