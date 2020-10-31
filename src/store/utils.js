const jsn = require('../Apprentice_TandemFor400_Data.json')

export const randomize = (size, arr) => {
  const set = new Set();
  const final = [];

  while (set.size < size) {
    const num = Math.floor(Math.random() * arr.length);

    if (!set.has(num)) {
      set.add(num);
      final.push(arr[num]);
    }
  }
  return final;
}

export const getRandomChoices = (arr) => {
  return randomize(4, arr);
}

jsn.forEach(obj => obj.choices = getRandomChoices(obj.incorrect.concat(obj.correct)));

export const getRandomTenQuestions = () => {
  return randomize(10, jsn);
}