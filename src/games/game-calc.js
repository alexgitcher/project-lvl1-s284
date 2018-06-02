import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import gameEngine from '../game-engine';

const rule = 'What is the result of the expression?';

const calc = (num1, num2, index) => {
  switch (index) {
    case 0:
      return num1 + num2;
    case 1:
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const operations = ['+', '-', '*'];

const gameData = () => {
  const num1 = Math.ceil(generateNumber(100));
  const num2 = Math.ceil(generateNumber(100));
  const index = Math.round(generateNumber(2));
  const question = `${num1} ${operations[index]} ${num2}`;
  const correctAnswer = calc(num1, num2, index);
  return cons(question, correctAnswer.toString());
};

const gameCalc = () => gameEngine(rule, gameData);

export default gameCalc;
