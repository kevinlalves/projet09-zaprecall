import unanswered from "./assets/unanswered.png";
import delayed from "./assets/delayed.png";
import wrong from "./assets/wrong.png";
import zap from "./assets/zap.png";

const colors = Object.freeze({
  unanswered: "black",
  delayed: "#FF922E",
  wrong: "#FF3030",
  zap: "#2FBE34"
});

const images = Object.freeze({
  unanswered,
  delayed,
  wrong,
  zap
});

const result = Object.freeze({
  wrong: "Não lembrei",
  delayed: "Quase não lembrei",
  zap: "Zap!"
});

const cardStates = Object.freeze({
  unanswered: "unanswered",
  answering: "answering",
  wrong: "wrong",
  delayed: "delayed",
  zap: "zap"
});

const sessionStates = Object.freeze({
  succeeded: "succeeded",
  failed: "failed",
});

const resultTitles = Object.freeze({
  succeeded: "🥳 Parabéns!",
  failed: "😥 Putz..."
});

const resultMessages = Object.freeze({
  succeeded: "Você não esqueceu de nenhum flashcard!",
  failed: "Ainda falta alguns... Mas não desanime!"
});

export { colors, images, result, cardStates, sessionStates, resultTitles, resultMessages };
