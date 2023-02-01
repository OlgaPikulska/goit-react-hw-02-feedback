import React, { Component } from "react";
//import PropTypes from "prop-types";
import { StyledTitle, ButtonWrapper, Button, StatisticsWrapper, StatisticsItem } from "./Feedback.styled";


export class Feedback extends Component {
    static defaultProps = {
        step: 1,
        good: 0,
        neutral: 0,
        bad: 0
    }

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
    }


    handleIncrementGood = () => {
        this.setState((state, props) => ({
            good: state.good + props.step,
        }))
    }
    handleIncrementNeutral = () => {
        this.setState((state, props) => ({
            neutral: state.neutral + props.step,
        }))
    }
    handleIncrementBad = () => {
        this.setState((state, props) => ({
            bad: state.bad + props.step,
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
        //const { step } = this.props;

        return (
            <>
                <StyledTitle>Please leave feedback</StyledTitle>
                <ButtonWrapper>
                    <Button
                        type="button"
                        onClick={this.handleIncrementGood}>Good</Button>
                    <Button
                        type="button"
                        onClick={this.handleIncrementNeutral}>Neutral</Button>
                    <Button
                        type="button"
                        onClick={this.handleIncrementBad}>Bad</Button>
                </ButtonWrapper>

                <StyledTitle>Statistics</StyledTitle>
                <StatisticsWrapper>
                    <StatisticsItem>Good: {this.state.good}</StatisticsItem>
                    <StatisticsItem>Neutral: {this.state.neutral}</StatisticsItem>
                    <StatisticsItem>Bad: {this.state.bad}</StatisticsItem>
                    <StatisticsItem>Total: {this.countTotalFeedback()}</StatisticsItem>
                    <StatisticsItem>Positive feedback: {this.countPositiveFeedbackPercentage()}%</StatisticsItem>
                </StatisticsWrapper>
            </>

        )
    }
}