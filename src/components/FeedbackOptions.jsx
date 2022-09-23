import React from "react";
import PropTypes from 'prop-types';
import {BoxButton, Button } from './FeedbackOptions.styles';

const FeedbackOptions = ({onIncreaseStatistics}) => (
<BoxButton>
    <Button type="button" onClick={()=>onIncreaseStatistics("good")}>
        Good
    </Button>
    <Button type="button" onClick={()=>onIncreaseStatistics("neutral")}>
        Neutral
    </Button>
    <Button type="button" onClick={()=>onIncreaseStatistics("bad")}>
        Bad
    </Button>
</BoxButton>
);

FeedbackOptions.propTypes = {
    onIncreaseStatistics: PropTypes.func,
};

export default FeedbackOptions;