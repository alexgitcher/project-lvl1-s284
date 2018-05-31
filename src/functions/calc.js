export default (num1, num2, index) => {
  if (index === 0) {
    return num1 + num2;
  } else if (index === 1) {
    return num1 - num2;
  }
  return num1 * num2;
};
