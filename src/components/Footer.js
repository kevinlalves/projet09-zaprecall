import styled from "styled-components";
import { images } from "../enums";

export default function Footer(props) {
  const { answeredCards, numCards } = props;

  return (
    <FooterContent>
      <p>{answeredCards.length}/{numCards} CONCLUÍDOS</p>
      <AnsweredCards>
        {answeredCards.length > 0
          && answeredCards.map((answer, idx) => <img src={images[answer]} key={idx} alt="answer type" />)}
      </AnsweredCards>
    </FooterContent>
  );
}

const FooterContent = styled.div`
  position: fixed;
  bottom: 0;
  background-color: white;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  font-family: "Recursive", sans-serif;
`;

const AnsweredCards = styled.div`
  display: flex;
  img {
    margin-top: 6px;
    height: 23px;
    width: 23px;
    margin-left: 3px;
    margin-right: 3px;
  }
`;
