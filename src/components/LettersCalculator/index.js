// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {userInput: 0}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value.length})
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="app-container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="phrase" className="label-element">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            name="phrase"
            className="text-input"
            placeholder="Enter the phrase"
            onChange={this.onChangeUserInput}
          />{' '}
          <br />
          <p type="button" className="letters-count">
            No.of letters: {userInput}
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image-sizing"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
