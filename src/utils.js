const jsn = require('./Apprentice_TandemFor400_Data.json')

jsn.forEach(obj => obj.choices = obj.incorrect.concat(obj.correct));

// export const getRandomChoices = (arr) => {
//   return randomize(4, arr);
// }

export const getRandomChoices = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i]
    let result = elem.incorrect.slice()
    const num = Math.floor(Math.random() * 4)
    result.splice(num, 0, elem.correct)
    elem.choices = result
  }
  return arr
}

getRandomChoices(jsn)

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


export const getRandomTenQuestions = (size, arr) => {
  return randomize(size, arr);
}