import readlineSync from 'readline-sync';

const attempts = 3;

const greeting = 'Welcome to the Brain Games!';

export default (rule, gameData) => {
  console.log(greeting);
  console.log(`${rule}\n`);

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < attempts; i += 1) {
    const gameCondition = gameData();
    const quest = gameCondition.question;

    console.log(`Question: ${quest}`);

    const answer = readlineSync.question('Your answer: ');

    const correctResult = gameCondition.correctAnswer;

    if (answer === correctResult) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctResult}".`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
