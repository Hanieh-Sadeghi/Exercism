interface Result {
  [key: string]: number
}
export const transform = (letters: string[][]): Result => {
  const result: Result = {};
  for (const [key, value] of Object.entries(letters)) {
    value.forEach(val => {
      let formattedLetters = val.toLowerCase();
      result[`${formattedLetters}`] = Number(key);
    })
  }
  return result;
};