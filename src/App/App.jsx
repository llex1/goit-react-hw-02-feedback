import React, { Fragment, Component } from "react";

//jsx modules
import FeedbackButton from "./components/FeedbackButton";
import FeedbackResults from "./components/FeedbackResults";

//states
import feedbackState from "./data/feedbackState";

//minimal css
import styles from "./main.module.css";

class App extends Component {
  state = feedbackState;

  feedbackChange = (event) => {
    if (event.target.nodeName === "BUTTON") {
      this.setState((state) => {
        return {
          [event.target.dataset.type]: ++state[event.target.dataset.type],
        };
      });
    }
  };

  render() {
    return (
      <Fragment>
        <h1>Please leave feedback</h1>
        <FeedbackButton feedbackChange={this.feedbackChange} />
        <FeedbackResults data={this.state} />
      </Fragment>
    );
  }
}

export default App;
