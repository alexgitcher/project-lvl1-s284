import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;

const gameEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

  const attempts = 3;

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  let counter = 0;

  while (counter < attempts) {
    const num = Math.ceil(Math.random() * 100);

    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(num) ? 'yes' : 'no';

    const message = `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;

    if (answer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(message);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEven;
