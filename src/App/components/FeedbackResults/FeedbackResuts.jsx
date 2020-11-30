import React, { Fragment } from "react";
import PropTypes from "prop-types";

function FeedbackResults({ data }) {
  const total = Object.values(data).reduce((acc, el) => (acc += el), 0);
  if (total) {
    return (
      <Fragment>
        <p>Good: {data.good}</p>
        <p>Neutral: {data.neutral}</p>
        <p>Bad: {data.bad}</p>
        <p>Total {total}</p>
        <p>Positive feedback {Math.trunc((data.good / total) * 100)}%</p>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <p>No feedback given</p>
      </Fragment>
    );
  }
}

FeedbackResults.propTypes = {
  data: PropTypes.exact({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};

export default FeedbackResults;
