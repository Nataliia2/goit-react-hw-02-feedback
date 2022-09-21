import React from "react";
import {BoxButton, Button } from './FeedbackOptions.styles';

const FeedbackOptions = ({onIncreaseGood, onIncreaseNeutral, onIncreaseBad}) => (
<BoxButton>
    <Button type="button" onClick={onIncreaseGood}>
        Good
    </Button>
    <Button type="button" onClick={onIncreaseNeutral}>
        Neutral
    </Button>
    <Button type="button" onClick={onIncreaseBad}>
        Bad
    </Button>
</BoxButton>
);


export default FeedbackOptions;