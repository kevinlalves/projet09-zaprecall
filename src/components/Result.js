import styled from "styled-components";
import { resultMessages, resultTitles } from "../enums";

export default function Result(props) {
  const { sessionState } = props;

  return (
    <ResultContent>
      <p>{resultTitles[sessionState]}</p>
      <p>{resultMessages[sessionState]}</p>
    </ResultContent>
  );
}

const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 101px;
  bottom: 70px;
  background-color: white;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
  p:nth-child(1) {
    margin-top: 16px;
    margin-bottom: 14px;
    font-weight: 700;
  }
  p {
    max-width: 70%;
    text-align: center;
  }
`;
