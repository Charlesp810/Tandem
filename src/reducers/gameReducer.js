import { getRandomTenQuestions } from '../utils';
const jsn = require('../Apprentice_TandemFor400_Data.json');

const CHECK_LOCALSTORAGE = 'CHECK_LOCALSTORAGE';
const SUBMIT_QUESTION = 'SUBMIT_QUESTION';
const NEXT_QUESTION = 'NEXT_QUESTION';
const NEW_GAME = 'NEW_GAME';

export const checkLocalStorage = () => ({
    type: CHECK_LOCALSTORAGE
});

export const submitQuestion = (payload) => ({
    type: SUBMIT_QUESTION,
    payload
});

export const nextQuestion = () => ({
    type: NEXT_QUESTION
});

export const newGame = () => ({
    type: NEW_GAME
});


const initialState = {
    questionList: getRandomTenQuestions(10, jsn),
    score: 0,
    idx: 0,
    selectedAnswer: ''
};

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case CHECK_LOCALSTORAGE:
            const localStorageState = JSON.parse(localStorage.getItem('state'));

            return localStorageState ? state = localStorageState : initialState;
        case SUBMIT_QUESTION:
            const score = action.payload === state.questionList[state.idx].correct ? state.score + 10 : state.score;
            localStorage.setItem("state", JSON.stringify({ ...state, score, selectedAnswer: action.payload }));

            return {
                ...state,
                score,
                selectedAnswer: action.payload
            };
        case NEXT_QUESTION:
            const idx = state.idx + 1;
            localStorage.setItem("state", JSON.stringify({ ...state, idx, selectedAnswer: '' }));

            return {
                ...state,
                idx,
                selectedAnswer: ''
            };
        case NEW_GAME:
            state = initialState;
            localStorage.clear();

            return {
                ...state,
                questionList: getRandomTenQuestions(10, jsn)
            };
        default:
            return state;
    };
}
