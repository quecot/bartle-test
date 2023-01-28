// https://www.educative.io/answers/how-to-sum-a-javascript-array-with-reduce
const sumArray = (array: Array<number>) => {
  if (array.length === 0) return 0;
  return array.reduce((total, item) => total + item);
};

export default sumArray;
