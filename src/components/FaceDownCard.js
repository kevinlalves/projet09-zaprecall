import { useState } from "react";
import styled from "styled-components";
import tap from "../assets/tap.png";
import { result, cardStates, sessionStates } from "../enums";

export default function FaceDownCard(props) {
  const { answeredCards, setAnsweredCards, card, setState, setSessionState } = props;
  const [showAnswer, setShowAnswer] = useState(false);

  const chooseResult = state => {
    setState(state);
    const newAnsweredCards = [...answeredCards];
    newAnsweredCards.push(state);
    setAnsweredCards(newAnsweredCards);
    if (state === cardStates.wrong) {
      setSessionState(sessionStates.failed);
    }
  }

  return (
    <FaceDownContent>
      <p data-test="flashcard-text">{showAnswer ? card.answer : card.question}</p>
      <ChooseResult showAnswer={showAnswer}>
        <button data-test="no-btn" onClick={() => chooseResult(cardStates.wrong)}>{result.wrong}</button>
        <button data-test="partial-btn" onClick={() => chooseResult(cardStates.delayed)}>{result.delayed}</button>
        <button data-test="zap-btn" onClick={() => chooseResult(cardStates.zap)}>{result.zap}</button>
      </ChooseResult>
      <TapImage showAnswer={showAnswer}>
        <img data-test="turn-btn" src={tap} alt="tap card" onClick={() => setShowAnswer(true)} />
      </TapImage>
    </FaceDownContent>
  );
}

const TapImage = styled.div`
  width: 90%;
  display: ${props => props.showAnswer ? "none" : "flex"};
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 6px;
  height: 38px;
  img {
    width: 30px;
    height: 20px;
    cursor: pointer !important;
  }
`;

const FaceDownContent = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #FFFFD4;
  p {
    margin-top: 18px;
    width: 85%;
    min-height: 44px;
    margin-bottom: 22px;
    line-height: 22px;
    font-size: 18px;
  }
`;

const ChooseResult = styled.div`
  display: ${props => props.showAnswer ? "flex" : "none"};
  align-items: center;
  justify-content: space-evenly;
  color: white;
  font-size: 12px;
  height: 38px;
  width: 96%;
  margin-bottom: 10px;
  button {
    border: none !important;
    box-shadow: none !important;
    width: 86px;
    height: 100%;
    color: white;
  }
  button:nth-child(1) {
    background-color: #FF3030;
  }
  button:nth-child(2) {
    background-color: #FF922E;
  }
  button:nth-child(3) {
    background-color: #2FBE34;
  }
`;
