interface Result {
  [key: string]: number;
}

export const transform = (letters: string[][]): Result => {
  return letters.reduce((result, [key, values]) => {
    values.forEach((value) => {
      const formattedLetters = value.toLowerCase();
      result[formattedLetters] = Number(key);
    });
    return result;
  }, {} as Result);
};
