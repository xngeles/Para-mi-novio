import { useState } from "react";
import "./App.css";

const phrases = [
  "no",
  "estás seguro?",
  "realmente seguro?",
  "Gugu, por favor",
  "no me hagas esto",
  "voy a llorar",
  "romperás mi corazón;(",
];

function App() {
  const [noCount, setCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="Valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="cat kissing"
            src="https://media.tenor.com/wmEFeowr6sMAAAAi/cat-kiss-kissing-cat.gif"
          />
          <div className="text">Yay! 🎉</div>
        </>
      ) : (
        <>
          <img
            alt="cat with hearts"
            src="https://media1.tenor.com/m/MoU_hvb9dC4AAAAC/pusheen-stormyhug.gif"
          />

          <div>¿Querés ser mi san valentin?</div>
          <div>
            <button
              className="YesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              SI
            </button>
            <button onClick={handleNoClick} className="NoButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
