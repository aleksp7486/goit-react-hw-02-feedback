import React, { Component } from 'react';
import { Box } from 'components/Box';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistic';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / (this.countTotalFeedback() / 100));
  };
  render() {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="start"
        p="120px"
        m="0 auto"
        maxWidth="800px"
        height="100vh"
      >
        <Box p={4} bg="bg" border="4px solid #1b8cbc" borderRadius="8px">
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistic">
            {this.countTotalFeedback() > 0 ? (
              <Statistic
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Box>
      </Box>
    );
  }
}
export default App;
