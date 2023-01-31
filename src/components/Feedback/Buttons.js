import React, { Component } from "react";

export class Buttons extends Component {
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


    handleIncrementGood = (value) => {

        this.setState((state, props) => ({
            value: state.value + props.step,
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

    render() {
        //const { step } = this.props;

        return (
            <>
                <div>
                    <button
                        type="button"
                        onClick={this.handleIncrementGood}>Good</button>
                    <button
                        type="button"
                        onClick={this.handleIncrementNeutral}>Neutral</button>
                    <button
                        type="button"
                        onClick={this.handleIncrementBad}>Bad</button>
                </div>
                <div>
                    <span>Good: {this.state.good}</span>
                    <span>Neutral: {this.state.neutral}</span>
                    <span>Bad: {this.state.bad}</span>
                </div>
            </>

        )
    }
}