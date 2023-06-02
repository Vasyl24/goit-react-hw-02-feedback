import React from 'react';
import css from './Response.module.css';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h2 className={css.title}>Please leave feedback</h2>

        <div>
          <button
            type="button"
            onClick={this.handleIncrementGood}
            className={css.btn}
          >
            Good
          </button>
          <button
            type="button"
            onClick={this.handleIncrementNeutral}
            className={css.btn}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={this.handleIncrementBad}
            className={css.btn}
          >
            Bad
          </button>
        </div>

        <h2 className={css.title}>Statistics</h2>

        <div className={css.counts}>
          <p>Good:</p>
          <span>{this.state.good}</span>
          <p>Neutral:</p>
          <span>{this.state.neutral}</span>
          <p>Bad:</p>
          <span>{this.state.bad}</span>
        </div>
      </div>
    );
  }
}

export default Counter;
