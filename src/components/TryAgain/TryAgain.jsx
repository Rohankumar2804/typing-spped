import React from 'react';
import './TryAgain.css';

const TryAgain = ({words, characters, wpm ,startAgain}) => {
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>
      <div className="result-container">
        <p>
          <b>Characters:</b> {characters}
        </p>
        <p>
          <b>words:</b> {words}
        </p>
        <p>
          <b>Speed:</b> {wpm} wpm
        </p>
      </div>
      <div>
        <button onClick={()=>startAgain()}className="end-btn start-again-btn">Re-try</button>
        <button
          className="end-btn share-again-btn"
          onClick={() => {
            window.open(
              'https://www.facebook.com/sharer/sharer.php?u=theleanprogrammer.com',
              'facebook-share-dialog',
              'width=800,height=600'
            );
          }}
        >
          Share
        </button>
        <button
          className="end-btn tweet-again-btn"
          onClick={() =>
            window.open(
              'https://twitter.com/intent/tweet?text=Check%20this%20out%20theleanprogrammer.com'
            )
          }
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
export default TryAgain;
