import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import gameEngine from '../game-engine';

const rule = 'Find the greatest common divisor of given numbers.\n';

const greatestCommonDivisor = (num1, num2) => {
  const minNumber = num1 < num2 ? num1 : num2;
  const mod = (num, divider) => num % divider === 0;

  const iter = (number1, number2, divisor) => {
    if (mod(number1, divisor) && mod(number2, divisor)) return divisor;

    const div = divisor - 1;
    return iter(number1, number2, div);
  };

  return iter(num1, num2, minNumber);
};

const param = () => {
  const num1 = Math.ceil(generateNumber(100));
  const num2 = Math.ceil(generateNumber(100));
  const question = `${num1} ${num2}`;
  const correctAnswer = greatestCommonDivisor(num1, num2);
  return cons(question, correctAnswer.toString());
};

const gameGcd = () => gameEngine(rule, param);

export default gameGcd;
