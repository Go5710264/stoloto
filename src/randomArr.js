import { 
    NUMBERS_FIRST_FIELD, 
    NUMBERS_SECOND_FIELD, 
} from './constants'

export const FIRST_RANDOM_ARR = randomlyGeneratedArr(NUMBERS_FIRST_FIELD);
export const SECOND_RANDOM_ARR = randomlyGeneratedArr(NUMBERS_SECOND_FIELD);

function randomlyGeneratedNum(arr) {
  const index = Math.floor(Math.random() * arr.length);
  const number = arr[index];
  return number;
}

export function randomlyGeneratedArr(arr) {
  const result = [];

  if (arr.length === 2) result.push(randomlyGeneratedNum(arr));
  if (arr.length === 19) {
    for (let i = 0; i < 8; i++) {
      let number = randomlyGeneratedNum(arr);
      const repeatNumber = result.some((item) => item === number);
      if (repeatNumber) {
        i--;
        continue;
      }
      result.push(number);
    }
  }

  return result;
}
