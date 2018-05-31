import readlineSync from 'readline-sync';
import { attempts, greeting, generateNumber } from '../utils';

const calc = (num1, num2, index) => {
  if (index === 0) {
    return num1 + num2;
  } else if (index === 1) {
    return num1 - num2;
  }
  return num1 * num2;
};

const operations = ['+', '-', '*'];

const rule = 'What is the result of the expression?\n';

const gameCalc = () => {
  console.log(greeting);
  console.log(rule);

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < attempts; i += 1) {
    const num1 = Math.ceil(generateNumber(100));
    const num2 = Math.ceil(generateNumber(100));
    const index = Math.round(generateNumber(2));
    const question = `${num1} ${operations[index]} ${num2}`;

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = calc(num1, num2, index);

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameCalc;
