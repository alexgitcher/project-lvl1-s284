import readlineSync from 'readline-sync';

const isEven = (num) => {
  if (num % 2 !== 0) return false;
  return true;
};

const gameEven = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  const wrongCorrect = 'is wrong answer ;(. Correct answer';

  const letsTry = `Let's try again, ${name}!`;

  let counter = 0;

  while (counter < 3) {
    const num = Math.ceil(Math.random() * 100);

    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== 'yes' && answer !== 'no') {
      return console.log(`"${answer}" ${wrongCorrect} should be "yes" or "no".\n${letsTry}`);
    } else if (!isEven(num) && answer === 'yes') {
      return console.log(`"${answer}" ${wrongCorrect} was "no".\n${letsTry}`);
    } else if (isEven(num) && answer === 'no') {
      return console.log(`"${answer}" ${wrongCorrect} was "yes".\n${letsTry}`);
    }

    counter += 1;
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gameEven;
