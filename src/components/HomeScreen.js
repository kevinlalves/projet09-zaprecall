import styled from "styled-components";
import logo from "../assets/logo.png";

export default function HomeScreen(props) {
  const { setStartSession } = props;

  return (
    <HomeContent>
      <img src={logo} alt="logo" />
      <p>ZapRecall</p>
      <button data-test="start-btn" onClick={() => setStartSession(true)}>Iniciar Recall!</button>
    </HomeContent>
  );
}

const HomeContent = styled.div`
  background-color: #FB6B6B;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  img {
    margin-top: 148px;
    width: 136px;
    height: 161px;
  }
  p {
    margin-top: 13px;
    font-family: "Righteous", cursive !important;
    font-size: 36px;
    color: white;
  }
  button {
    margin-top: 30px;
    width: 246px;
    height: 54px;
    background-color: white;
    border: 1px solid #D70900 !important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #D70900;
    font-size: 18px;
  }
`;
