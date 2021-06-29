import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';

const ChallengeSection = ({
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
  //console.log(testInfo);
  return (
    <div className="challenge-section-container">
      <h1 className="challenge-section-header" data-aos="fade-down">
        Take a speed test now!
      </h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
      />
    </div>
  );
};
export default ChallengeSection;
