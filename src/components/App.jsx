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

        increaseStatistics = propertyName => {
          this.setState(prevState => {
            const value = prevState[propertyName];
            return {
              [propertyName]: value + 1,
            };
          });
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
                    onIncreaseStatistics = {this.increaseStatistics} 
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
