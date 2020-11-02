import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { submitQuestion, nextQuestion, newGame, checkLocalStorage } from './reducers/gameReducer';


class App extends Component {
  constructor() {
    super()
    this.state = {
      choice: ''
    };
  }

  componentDidMount() {
    this.props.checkLocalStorage()
  }

  selectedAnswer(event) {
    this.setState({ choice: event.target.value });
  }

  submit() {
    if (this.state.choice) {
      this.props.submitQuestion(this.state.choice);
    }
    this.setState({ choice: '' });
  }

  render() {
    const { questionList, idx, score, selectedAnswer } = this.props

    return questionList.length && (
      <div className="App">
        <button className="button-reset" type="button" onClick={() => this.props.newGame()}>New Game</button>
        {idx <= 9 ? (
          <div>
            <div className="score-question-container">
              <h2>question: {idx + 1}/10</h2>
              <h2>
                score: {score}
              </h2>
            </div>
            <div className="game">
              <h1 className="game-title">Trivia</h1>
              <div className="game-container">
                <div className="game-questions-container">
                  <div className="game-question">
                    <h3>{questionList[idx].question}</h3>
                  </div>
                  <div className="game-choices">
                    <form onChange={event => this.selectedAnswer(event)}>
                      {
                        questionList[idx].choices.map(choice => (
                          <p key={choice} className={`${selectedAnswer && choice === questionList[idx].correct ? 'correct-answer' : selectedAnswer && choice !== questionList[idx].correct ? 'incorrect-answer' : ''}`}>
                            <input type="radio" id={choice} value={choice} name="choice" defaultChecked={selectedAnswer === choice ? true : false} />
                            <label htmlFor={choice}>{choice}</label>
                          </p>
                        ))
                      }
                    </form>
                  </div>
                </div>
                <div className="game-buttons">
                  <button className={`button-submit ${selectedAnswer ? 'is-submitted' : ''}`} type="button" onClick={() => this.submit()}>Submit</button>
                  <button className={`button-next ${selectedAnswer ? '' : 'is-submitted'}`} type="button" onClick={() => this.props.nextQuestion()}>Next</button>
                </div>
              </div>
            </div>
          </div>
        ) : <div className="game">
            <h3 className="end-text">Congrats you've scored</h3>
            <h4 className="end-score">{score}</h4>
            <p className="end-text">Thanks for playing!</p>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionList: state.game.questionList,
    score: state.game.score,
    idx: state.game.idx,
    selectedAnswer: state.game.selectedAnswer
  }
}

const mapDispatchToProps = dispatch => ({
  checkLocalStorage: () => {
    dispatch(checkLocalStorage());
  },
  submitQuestion: (choice) => {
    dispatch(submitQuestion(choice));
  },
  nextQuestion: () => {
    dispatch(nextQuestion());
  },
  newGame: () => {
    dispatch(newGame())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
