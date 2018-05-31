import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import gameEngine from '../game-engine';

const rule = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = num => num % 2 === 0;

const param = () => {
  const num = Math.ceil(generateNumber(100));
  const question = num;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameEven = () => gameEngine(rule, param);

export default gameEven;
