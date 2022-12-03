import styled from "styled-components";
import { cardStates } from "../enums";
import { colors, images } from "../enums";



export default function FaceUpCard(props) {
  const { state, cardNumber, setState } = props;


  return (
    <FaceUpContent state={state}>
      <p>Pergunta {cardNumber}</p>
      <img
        src={images[state]}
        alt="start question"
        onClick={state === cardStates.unanswered ? () => setState(cardStates.answering) : undefined}
      />
    </FaceUpContent>
  );
}

const FaceUpContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 20px;
  background-color: white;
  text-decoration: ${props => props.state === cardStates.unanswered ? "none" : "line-through"};
  color: ${props => colors[props.state]}
`;
