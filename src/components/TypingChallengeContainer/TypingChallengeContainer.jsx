import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

const TypingChallengeContainer = ({
  selectedParagraph,
  timerStarted,
  timeRemaining,
  words,
  characters,
  wpm,
  testInfo,
  onInputChange
}) => {
  console.log(onInputChange)
  return (
    <div className="typing-challenge-container">
      <div className="details-container">
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
      </div>
      <div className="typewriter-container">
        <TypingChallenge
          selectedParagraph={selectedParagraph}
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};
export default TypingChallengeContainer;
