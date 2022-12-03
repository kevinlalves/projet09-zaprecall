import { useState } from "react";
import styled from "styled-components";
import { cardStates } from "../enums";
import FaceDownCard from "./FaceDownCard";
import FaceUpCard from "./FaceUpCard";


export default function Card(props) {
  const { cardNumber, card, setAnsweredCards, answeredCards, setSessionState } = props;
  const [state, setState] = useState(cardStates.unanswered);

  return (
    <CardContent data-test="flashcard" state={state}>
      {state === cardStates.answering
        ? <FaceDownCard
          card={card}
          answeredCards={answeredCards}
          setAnsweredCards={setAnsweredCards}
          setState={setState}
          setSessionState={setSessionState}
        />
        : <FaceUpCard setState={setState} state={state} cardNumber={cardNumber} />

      }
    </CardContent>
  );
}

const CardContent = styled.div`
  img {
    cursor: ${props => props.state === cardStates.unanswered ? "pointer" : "default"};
  }
  * {
    border-radius: 5px;
  }
  &>div {
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    width: 300px;
    min-height: 65px !important;
    margin-bottom: 25px;
  }
`;
