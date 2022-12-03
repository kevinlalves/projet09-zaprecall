import styled from "styled-components";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import Result from "./Result";
import { useState } from "react";
import { sessionStates } from "../enums";

export default function SessionScreen(props) {
  const { cards } = props;
  const [answeredCards, setAnsweredCards] = useState([]);
  const [sessionState, setSessionState] = useState(sessionStates.succeeded);

  return (
    <SessionContent>
      <Header />
      <Cards
        cards={cards}
        answeredCards={answeredCards}
        setAnsweredCards={setAnsweredCards}
        setSessionState={setSessionState}
      />
      <Footer answeredCards={answeredCards} numCards={cards.length}>
        <>{answeredCards.length === cards.length && <Result sessionState={sessionState} />}</>
      </Footer>
    </SessionContent>
  );
}

const SessionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FB6B6B;
  min-height: 100vh;
`;
