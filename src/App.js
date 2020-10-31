import { connect } from 'react-redux'
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="score-container">
        score
      </div>
      <div className="game">
        <h1 className="game-title">Trivia</h1>
        <div className="game-container">
          <div className="game-questions-container">
            <div className="game-question">

            </div>
            <div className="game-choices">

            </div>
          </div>
          <div className="game-buttons">
            <button className="button-submit" type="submit">Submit</button>
            <button className="button-next" type="button">Next</button>
          </div>
        </div>
      </div>



    </div>
  );
}

const mapState = (state) => {
  return {
    score: state.score
  }
}

export default connect(mapState)(App);

