export const transform = (letters) => {
  const result = {};
  for (const [key, value] of Object.entries(letters)) {
    value.forEach((val) => {
      let formattedLetters = val.toLowerCase();
      result[formattedLetters] = Number(key);
    });
  }
  return result;
};
