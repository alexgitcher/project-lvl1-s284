import readlineSync from 'readline-sync';

const calc = (num1, num2, index) => {
  if (index === 0) {
    return num1 + num2;
  } else if (index === 1) {
    return num1 - num2;
  }
  return num1 * num2;
};

const attempts = 3;

let counter = 0;

const greeting = 'Welcome to the Brain Games!';

const gameCalc = () => {
  const rules = 'What is the result of the expression?\n';

  console.log(greeting);
  console.log(rules);

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  for (; counter < attempts;) {
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    const index = Math.round(Math.random() * 2);
    const operations = ['+', '-', '*'];

    console.log(`Question: ${num1} ${operations[index]} ${num2}`);

    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = calc(num1, num2, index);

    if (Number(answer) === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameCalc;
