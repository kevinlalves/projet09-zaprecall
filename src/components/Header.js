import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <HeaderContent>
      <img src={logo} alt="logo" />
      <p>ZapRecall</p>
    </HeaderContent>
  );
}

const HeaderContent = styled.div`
  margin-top: 42px;
  height: 60px;
  display: flex;
  align-items: center;
  img {
    width: 52px;
    height: 100%;
  }
  p {
    font-size: 36px;
    color: white;
    width: 204px;
    text-align: center;
    font-family: "Righteous", cursive !important;
  }
`;
