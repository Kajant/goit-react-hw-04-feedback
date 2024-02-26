import { useState } from 'react';
import React from 'react';
import Section from './Section/Section';
import Stats from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackState = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log("Error");
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  const options = ['Good', 'Neutral', 'Bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} leaveFeedback={feedbackState} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Stats
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}