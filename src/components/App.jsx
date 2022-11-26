import React, { Component } from 'react';
import { Box } from 'components/Box';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = property => {
    this.setState(prevState => ({ [property]: prevState[property] + 1 }));
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
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
      >
        <Box p={4} bg="bg" border="4px solid #1b8cbc" borderRadius="8px">
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
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
