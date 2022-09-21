import React from "react";
import PropTypes from 'prop-types';
import {StatisticsBox, StatisticsItem, StatisticsList} from './Statistics.styles'

const Statistics = ({  
    good,
    neutral,
    bad,
    total,
    positivePercentage,}) => (
        <StatisticsBox>
            <StatisticsItem>
                <StatisticsList>Good:{good}</StatisticsList>
                <StatisticsList>Neutral:{neutral}</StatisticsList>
                <StatisticsList>Bad: {bad}</StatisticsList>
                <StatisticsList>Total:{total}</StatisticsList>
                <StatisticsList>Positive feedback: {positivePercentage}%</StatisticsList>
            </StatisticsItem>
            
        </StatisticsBox>
    );

    Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
};


export default Statistics;