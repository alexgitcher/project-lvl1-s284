import readlineSync from 'readline-sync';
import { attempts, greeting } from '../game-settings';
import calc from '../functions/calc';

const gameCalc = () => {
  const rules = 'What is the result of the expression?\n';

  console.log(greeting);
  console.log(rules);

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < attempts;) {
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    const index = Math.round(Math.random() * 2);
    const operations = ['+', '-', '*'];
    const question = `${num1} ${operations[index]} ${num2}`;

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = calc(num1, num2, index);

    if (Number(answer) === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameCalc;
