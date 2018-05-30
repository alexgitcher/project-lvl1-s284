import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;

const attempts = 3;

let counter = 0;

const greeting = 'Welcome to the Brain Games!';

const gameEven = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".\n';

  console.log(greeting);
  console.log(rules);

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  for (; counter < attempts;) {
    const question = Math.ceil(Math.random() * 100);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEven;
