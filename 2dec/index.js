import { puzzle } from "./puzzle.js";

/*
  Ej:
  Oponent     You
  A (piedra) Y (Papel) = 3
  B (papel) X (Piedra) = 0
  C (tijera) Z (Tijera) = 1

  -----------------------------

  Piedra (A) -> Tijera (C)
  Papel (B) -> Piedra (A)
  Tijera (C) -> Papel (B)

  A: 1
  B: 2
  C: 3

  win = 6
  daw = 3
  lose = 0
*/

const MAP_ELECTION = {
  X: "A",
  Y: "B",
  Z: "C",
};

const MAP_RULES = {
  A: "C",
  B: "A",
  C: "B",
};

const MAP_LOSE = {
  C: "A",
  A: "B",
  B: "C",
};

const MAP_SCORE = {
  A: 1,
  B: 2,
  C: 3,
};

export const getScore = () => {
  let scoreFirst = 0;
  let scoreSecond = 0;

  puzzle().forEach((line) => {
    const [oponent, you] = line.split(" ");

    scoreFirst += calculateScore(oponent, you);
    scoreSecond += calculateScoreSecondPart(oponent, you);
  });

  return `First: ${scoreFirst} - Second: ${scoreSecond}`;
};

const calculateScore = (oponent, you) => {
  if (oponent === MAP_ELECTION[you]) {
    return 3 + MAP_SCORE[MAP_ELECTION[you]];
  }

  if (MAP_RULES[oponent] === MAP_ELECTION[you]) {
    return 0 + MAP_SCORE[MAP_ELECTION[you]];
  }

  return 6 + MAP_SCORE[MAP_ELECTION[you]];
};

/*
    Oponente        You
  A (piedra)    Y (empate)  => return A
  B (papel)     X (perder)  => return A
  C (tijera)    Z (ganar)   => return A
*/
const calculateScoreSecondPart = (oponent, you) => {
  if (you === "X") {
    return 0 + MAP_SCORE[MAP_RULES[oponent]];
  }

  if (you === "Y") {
    return 3 + MAP_SCORE[oponent];
  }

  if (you === "Z") {
    return 6 + MAP_SCORE[MAP_LOSE[oponent]];
  }
};
