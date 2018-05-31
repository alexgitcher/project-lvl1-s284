import readlineSync from 'readline-sync';
import { attempts, greeting, generateNumber } from '../utils';

const isEven = num => num % 2 === 0;

const rule = 'Answer "yes" if number even otherwise answer "no".\n';

const gameEven = () => {
  console.log(greeting);
  console.log(rule);

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < attempts; i += 1) {
    const question = Math.ceil(generateNumber(100));

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEven;
