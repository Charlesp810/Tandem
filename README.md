
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Trivia App
This project is using create-react-app. It is a boilerplate that comes with built in webpack, bundle. jest, etc.

##### Acceptance Criteria
- [x] A user can view questions.
- [x] Questions with their multiple choice options must be displayed one at a time.
- [x] Questions should not repeat in a round.
- [x] A user can select only 1 answer out of the 4 possible answers.
- [x] The correct answer must be revealed after a user has submitted their answer A user can see the score they received at the end of the round
- [x] *Optional* Unit tests!

### Starting the App
This app can be started using both npm and yarn.
```
npm start
OR
yarn start
```

### `yarn start` OR `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`OR `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

A handful of tests to check:
* Score gets updated in real time when the correct answer is submitted
* Randomizing function does not contain duplicate questions
* State is reset upon clicking the "New Game" button

### Additional Features Added
* Implemented localstorage to perserve current game progress in the event of disconnections or refreshes
* Used redux for state management
* Displays the current question number on the screen
* On submit, correct answers are displayed colored green and incorrect are colored red
* Player will see end game screen once all questions are completed
* Player has the option to restart the game at the top left corner by clicking the `NEW GAME` button
* Player cannot click `SUBMIT` unless a choice has been selected
* `SUBMIT` button gets hidden to show the `NEXT` button once a selection has been made

### In a perfect world
* Players would have a starting screen instead of immediately seeing the first question
* There would be a timer on each question
* Multiplayer functionality
* backend to store high scores and user ranks
