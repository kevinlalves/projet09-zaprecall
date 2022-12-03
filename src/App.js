import SessionScreen from "./components/SessionScreen";
import HomeScreen from "./components/HomeScreen";
import GlobalStyle from "./style/GlobalStyle";
import { useState } from "react";
import decks from "./decks";

export default function App() {
  const [startSession, setStartSession] = useState(false);

  return (
    <>
      <GlobalStyle />
      {startSession ? <SessionScreen cards={decks["standard"]}/> : <HomeScreen setStartSession={setStartSession} />}
    </>
  );
}
