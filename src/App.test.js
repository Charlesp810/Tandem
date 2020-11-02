import { render, screen } from '@testing-library/react';
import gameReducer, { submitQuestion, newGame } from './reducers/gameReducer';
import { getRandomTenQuestions } from './utils';

const mockState = {
  questionList: [{ question: 'What color are Aircraft black boxes?', incorrect: ['red', 'black', 'green'], correct: 'orange' }],
  score: 40,
  idx: 0
};

const mockList = ['thai', 'pizza', 'ramen', 'sushi', 'bbq', 'hotpot', 'fried chicken', 'wine', 'beer', 'cocktail'];

describe('updates score if correct answer was submitted', () => {
  it('correct answer submitted', () => {
    expect(gameReducer(mockState, submitQuestion('orange'))).toEqual({ ...mockState, score: 50 });
  });
  it('incorrect answer submitted', () => {
    expect(gameReducer(mockState, submitQuestion('black'))).toEqual({ ...mockState, score: 40 });
  });
});

describe('randomize question pool without duplicates', () => {
  it('does not repeat questions', () => {
    const checker = () => {
      let set = new Set();
      let repeat = false;
      const arr = getRandomTenQuestions(5, mockList);

      for (let i = 0; i < arr.length; i++) {
        if (!set.has([arr[i]])) {
          set.add(arr[i]);
        } else {
          repeat = true;
          break;
        }
      }
      return repeat;
    }
    expect(checker()).toEqual(false);
  });
});

describe('state clear on newGame', () => {
  it('state is reset', () => {
    expect(gameReducer(mockState, newGame()).questionList.length).toEqual(10)
    expect(gameReducer(mockState, newGame()).score).toEqual(0)
    expect(gameReducer(mockState, newGame()).idx).toEqual(0)
  })
})