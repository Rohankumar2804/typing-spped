import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css';

const TestContainer = ({
  selectedParagraph,
  timerStarted,
  timeRemaining,
  words,
  characters,
  wpm,
  testInfo,
  onInputChange,
  startAgain
}) => {
  console.log(testInfo)
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div  className="typing-challenge-cont">
          <TypingChallengeContainer
            words={words}
            characters={characters}
            wpm={wpm}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            selectedParagraph={selectedParagraph}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-container">
          <h1>This is try again</h1>
          <TryAgain words={words} characters={characters} wpm={wpm}   startAgain={startAgain} />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
