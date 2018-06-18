import generateNumber from '../utils';
import gameEngine from '../game-engine';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const gameData = () => {
  const num = Math.ceil(generateNumber(100));
  const question = num;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const gameEven = () => gameEngine(rule, gameData);

export default gameEven;
