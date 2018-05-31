import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import gameEngine from '../game-engine';

const rule = 'What is the result of the expression?\n';

const calc = (num1, num2, index) => {
  if (index === 0) {
    return num1 + num2;
  } else if (index === 1) {
    return num1 - num2;
  }
  return num1 * num2;
};

const param = () => {
  const num1 = Math.ceil(generateNumber(100));
  const num2 = Math.ceil(generateNumber(100));
  const index = Math.round(generateNumber(2));
  const operations = ['+', '-', '*'];
  const question = `${num1} ${operations[index]} ${num2}`;
  const correctAnswer = calc(num1, num2, index);
  return cons(question, correctAnswer.toString());
};

const gameCalc = () => gameEngine(rule, param);

export default gameCalc;
