import React, { Component } from "react";
import { Section } from "./Section"
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Notification } from "./Notification";


export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  }

  handleFeedback = (e) => {
    const { name } = e.currentTarget;
    this.setState((state, props) => ({
      [name]: state[name] + 1,
    }))
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    const positiveFeedback = Math.round(this.state.good * 100 / totalFeedback);
    return totalFeedback === 0 ? totalFeedback : positiveFeedback;
  }

  render() {
    const total = this.countTotalFeedback()
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0
            ? <Notification message="There is no feedback" />
            : <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />}

        </Section>
      </>

    );
  }
};
