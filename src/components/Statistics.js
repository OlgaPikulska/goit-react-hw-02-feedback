import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StatisticsWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
gap: 5px;
`

const StatisticsItem = styled.span`
font-weight: 600;
`

export class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props

        return (
            <>
                <StatisticsWrapper>
                    <StatisticsItem>Good: {good}</StatisticsItem>
                    <StatisticsItem>Neutral: {neutral}</StatisticsItem>
                    <StatisticsItem>Bad: {bad}</StatisticsItem>
                    <StatisticsItem>Total: {total}</StatisticsItem>
                    <StatisticsItem>Positive feedback: {positivePercentage}%</StatisticsItem>
                </StatisticsWrapper>
            </>

        )
    }
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}