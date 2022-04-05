import React, { Component } from "react";
import Button from "./UI components/Button";
import classes from "./Main.module.css";

class Main extends Component {
  state = {
    counter: 0,
  };

  addOneHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  addFiveHandler = (text) => {
    console.log(text);
    this.setState({
      counter: this.state.counter + 5,
    });
  };
  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };

  removeOneHandler = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
  removeFiveHandler = () => {
    this.state.counter < 5
      ? this.setState({
          counter: 0,
        })
      : this.setState({
          counter: this.state.counter - 5,
        });
  };

  render() {
    let classStyle = "";

    if (this.state.counter === 0) {
      classStyle = classes.circle;
    } else if (this.state.counter % 2 === 0) {
      classStyle = `${classes.circle} ${classes.even}`;
    } else {
      classStyle = `${classes.circle} ${classes.odd}`;
    }

    return (
      <main>
        <div>
          <div className={classStyle}>
            <h1>{this.state.counter}</h1>
          </div>
          <Button click={this.addFiveHandler} value="Add 5" btnType="primary" />
          <Button click={this.addOneHandler} btnType="primary">
            Add one
          </Button>
          <Button click={this.resetHandler} btnType="secondary">
            Reset
          </Button>
          <Button click={this.removeOneHandler} btnType="primary">
            Remove one
          </Button>
          <Button click={this.removeFiveHandler} btnType="primary">
            Remove five
          </Button>
        </div>
      </main>
    );
  }
}

export default Main;
