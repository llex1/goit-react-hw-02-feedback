import React from "react";
import PropTypes from "prop-types";

function FeedbackButton({ feedbackChange }) {
  return (
    <div onClick={feedbackChange}>
      <button data-type="good">Good</button>
      <button data-type="neutral">Neutral</button>
      <button data-type="bad">Bad</button>
    </div>
  );
}

FeedbackButton.propTypes = {
  feedbackCange: PropTypes.func,
};

export default FeedbackButton;
