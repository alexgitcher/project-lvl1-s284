export const isEven = num => num % 2 === 0;

export const calc = (num1, num2, index) => {
  if (index === 0) {
    return num1 + num2;
  } else if (index === 1) {
    return num1 - num2;
  }
  return num1 * num2;
};

export const attempts = 3;

export const greeting = 'Welcome to the Brain Games!';
