import generateNumber from '../utils';
import gameEngine from '../game-engine';

const rule = 'What number is missing in this progression?';

const steps = [2, 3, 4, 5];
const progressionLength = 10;

const gameData = () => {
  const stepIndex = Math.round(generateNumber(3));
  const step = steps[stepIndex];
  const startNum = Math.ceil(generateNumber(100));
  const hiddenNum = Math.round(generateNumber(9));
  const progression = [];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    if (i === 0) progression.push(startNum);
    progression.push(progression[i] + step);
  }

  const correctAnswer = progression[hiddenNum];

  const progressoinQuestion = progression.map((item, index) => {
    if (index === hiddenNum) return '..';
    return item;
  });

  const question = progressoinQuestion.join(' ');

  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const gameProgression = () => gameEngine(rule, gameData);

export default gameProgression;
