import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Statistic = ({ text, counter }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{counter}</p>
    </div>
  );
};

const Button = ({ handleEvent, text }) => {
  return <button onClick={handleEvent}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div>
        <Statistic text="good" counter={good} />
        <Statistic text="neutral" counter={neutral} />
        <Statistic text="bad" counter={bad} />
        <Statistic text="sum" counter={good + neutral + bad} />
        <Statistic text="average" counter={(good + bad * -1) / total} />
        <Statistic text="positive" counter={`${(good / total) * 100}%`} />
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="Give feedback" />
      <Button handleEvent={() => setGood(good + 1)} text="good" />
      <Button handleEvent={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleEvent={() => setBad(bad + 1)} text="bad" />
      <Header text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
