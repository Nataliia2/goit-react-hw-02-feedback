import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export class App extends Component {
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
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
      };
    
      countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
      };

    render() {
      const { good, neutral, bad } = this.state;
        return (
          <>  
                <Section title="Please leave feedback">
                  <FeedbackOptions 
                    onIncreaseGood = {this.increaseGood}
                    onIncreaseNeutral = {this.increaseNeutral} 
                    onIncreaseBad = {this.increaseBad}
                  />
                </Section>

                <Section title="Statistics">
                    
                    {this.countTotalFeedback() === 0 ? (
                      <Notification />
                    ) : (
                      <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                      />
                    )}     
                </Section>

          </>
        )
    }
};
