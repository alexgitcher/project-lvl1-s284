import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import gameEngine from '../game-engine';

const rule = 'Is this number prime?';

const isPrime = (num) => {
  if (num === 1 || num <= 0) return false;

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const gameData = () => {
  const number = Math.ceil(generateNumber(100));
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

const gamePrime = () => gameEngine(rule, gameData);

export default gamePrime;
