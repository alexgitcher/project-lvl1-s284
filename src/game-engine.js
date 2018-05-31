import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { attempts, greeting } from './utils';

export default (rule, param) => {
  console.log(greeting);
  console.log(rule);

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < attempts; i += 1) {
    const pair = param();
    const question = car(pair);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = cdr(pair);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
