import { getRandomTenQuestions } from './utils'

const SUBMIT_QUESTION = 'SUBMIT_QUESTION'

export const submitQuestion = payload => ({
  type: SUBMIT_QUESTION,
  payload
})

const initialState = {
  score: 0,
  questionList: []

}

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_QUESTION:
      return action.payload
    default:
      return state
  }
}
