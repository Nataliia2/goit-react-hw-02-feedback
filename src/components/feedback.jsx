import React from "react";
import {BoxFeedback, Header, BoxButton, Button, HeaderValue, BoxValue, TextValue, Value} from './feedback.styled';


class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        };
    

        increaseGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good +1,
            };
        })
    };


        increaseNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral +1,
            };
        })
    };

    

        increaseBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad +1,
            };
        })
    };
    

    render() {
        return (
            <BoxFeedback>
                <Header>Please leave Feedback</Header>
                <BoxButton>
                    <Button type="button" onClick={this.increaseGood}>
                        Good
                        </Button>
                    <Button type="button" onClick={this.increaseNeutral}>
                        Neutral
                        </Button>
                    <Button type="button" onClick={this.increaseBad}>
                        Bad
                        </Button>
                </BoxButton>
                <HeaderValue>Statistics</HeaderValue>
                <BoxValue>
                    <TextValue>Good: <Value>{this.state.good}</Value></TextValue>
                    <TextValue>Neutral: <Value>{this.state.neutral}</Value></TextValue>
                    <TextValue>Bad: <Value>{this.state.bad}</Value></TextValue>
                </BoxValue>
                
            </BoxFeedback>
        )
    }
}

export default Feedback;