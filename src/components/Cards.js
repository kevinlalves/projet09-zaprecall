import styled from "styled-components";
import Card from "./Card";

export default function Cards(props) {
  const { answeredCards, setAnsweredCards, cards, setSessionState } = props;

  return (
    <CardsContent>
      {
        cards.map((card, cardIndex) =>
          <Card
            answeredCards={answeredCards}
            setAnsweredCards={setAnsweredCards}
            key={cardIndex} cardNumber={cardIndex + 1}
            card={card}
            setSessionState={setSessionState}
          />
        )
      }
    </CardsContent>
  );
}

const CardsContent = styled.div`
  margin-top: 51px;
  margin-bottom: 154px;
`;
