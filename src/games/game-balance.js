import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import gameEngine from '../game-engine';

const rule = 'Balance the given number.';

const diffAbs = (num1, num2) => Math.abs(num1 - num2);

const sortNum = (num) => {
  const numArray = num.toString().split('');
  return numArray.sort((a, b) => a - b).join('');
};

const getMiddlePart = (num) => {
  const numStr = num.toString();
  return numStr.substring(1, numStr.length - 1);
};

const isBalance = (num) => {
  const numToString = num.toString();
  if (numToString.length === 1) return true;

  const iter = (numStr, counter) => {
    if (numStr.length < 2) return false;

    const firstNum = Number(numStr[0]);
    const secondNum = Number(numStr[1]);
    const diff = diffAbs(firstNum, secondNum);
    const newNumStr = numStr.slice(1);
    const count = diff > 1 ? counter + 1 : counter;

    if (newNumStr.length >= 2) {
      return iter(newNumStr, count);
    }
    return count === 0;
  };
  return iter(numToString, 0);
};

const patchNum = (num) => {
  const numStr = num.toString();
  const firstNum = Number(numStr[0]);
  const lastNum = Number(numStr[numStr.length - 1]);
  const diff = diffAbs(firstNum, lastNum);

  if (diff > 1) {
    const middleNum = getMiddlePart(num);
    const newNum = Number([firstNum + 1, middleNum, lastNum - 1].join(''));
    return sortNum(newNum);
  }
  return sortNum(num);
};

const numBalance = (num) => {
  if (!isBalance(num)) {
    const sortedNum = sortNum(num);
    const minNum = Number(sortedNum[0]);
    const maxNum = Number(sortedNum[sortedNum.length - 1]);
    const middleNum = getMiddlePart(sortedNum);
    const newNum = Number([minNum + 1, middleNum, maxNum - 1].join(''));

    return numBalance(newNum);
  }
  return patchNum(sortNum(num));
};

const gameData = () => {
  const num = Math.ceil(generateNumber(10000));
  const question = num;
  const correctAnswer = numBalance(num);
  return cons(question, correctAnswer.toString());
};

const gameBalance = () => gameEngine(rule, gameData);

export default gameBalance;
